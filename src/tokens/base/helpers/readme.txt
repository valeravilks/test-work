//////////////////////////////////////////////////
//                                              //
//  Helpers                                     //
//  https://www.dreamersofday.co                 //
//                                              //
//////////////////////////////////////////////////

/**
 * The purpose of Helpers is to provide extremely common style treatments
 * and UI patterns, some good examples are:
 *
 * - Hide an element visually but have it available for screen readers.
 * - Truncate a line of text using an ellipsis.
 * - Applying white space outside of Components.
 *
 * Rather than repeating the CSS for these common style treatments and UI
 * patterns over and over and also the cognitive load of having to remember
 * their CSS declarations we instead abstract them into nicely reusable
 * classes and mixins.
 *
 * Helpers all follow the Single Responsibility Principle and the Open/Closed
 * Principle meaning they do one thing and one thing only and are never open to
 * extension i.e. you cannot modify or add to them in any way. If you need to
 * modify any of these Helpers then you should simply not use them. Read more
 * about these principles and how they apply to CSS here:
 *
 * - http://csswizardry.com/2012/04/
 *   the-single-responsibility-principle-applied-to-css/
 * - http://csswizardry.com/2012/06/the-open-closed-principle-applied-to-css/
 *
 * Implementation
 *
 * Helpers are available as classes and sometimes as mixins, here we explain
 * how to implement the two different types. The class versions come with the
 * `!important` keyword, this is because they always need to win in terms of
 * CSS specificity as they should always just work. For the mixin versions
 * this is optional as the mixin versions are typically being applied from
 * within Components therefore do not require the specificity boost. All the
 * mixin versions are defined in "Mixins and Functions -> Helpers".
 *
 * Applying Helpers via their *class* implementation would only be done in two
 * scenarios:
 *
 * - **Outside of Components and Layout Templates:** this'll be rare as most
 *   of your UI should be componentised or encapsulated in a Layout Template,
 *   for example, a site header or footer. An example though, might be that
 *   you have a paragraph element (`<p>`) sitting between two Components in a
 *   view that needs to be center aligned, so you apply one of the "Text"
 *   Helper classes: `.h-text-align-center`, like so:
 *   `<p class="h-text-align-center">`. However, this could be argued that
 *   this paragraph element should become a Component. The main exception of
 *   avoiding Helpers outside of Components and Layout Templates is the
 *   "Spacing" Helpers as we don't want to bake in outside (`margin`) spacing
 *   to Components as this makes them contextual to surrounding UI.
 *
 * - **Inside of Components and Layout Templates:** although quite rare there
 *   are certain scenarios were you would want to be applying a Helper
 *   directly in the markup of a Component or Layout Template as opposed to
 *   applying it via the mixin implementation. However, this typically only
 *   ever applies to multi-line declaration Helpers, applying a single-line
 *   declaration Helper, for example:
 *
    .h-text-size {
        font-size: rem($g-font-size) !important;
    }
 *
 *   Wouldn't be correct as you would simply write that single-line declaration
 *   directly into your Component or Layout Template CSS, and this is why
 *   single-line declaration Helpers do not come with a mixin version. An
 *   example of applying a multi-line declaration Helper directly in the
 *   markup of a Component or Layout Template would be when you're having to
 *   create a class to apply a fairly common Helper. For example, you're
 *   inside a "Drop Down Menu" Component needing to add a piece of text to the
 *   drop down menu trigger button that is only for screen reader users—using
 *   the "Hide visually" Helper. The correct way to achieve this would be:
 *
    <button type="button" class="c-drop-down-menu__trigger">
        My account
        <span class="h-hide-visually">Open the menu with the enter key and
        close it with the escape key; use the up and down arrow keys to
        navigate.</span>
    </button>
 *
 *   Not:
 *
    <button type="button" class="c-drop-down-menu__trigger">
        My account
        <span class="c-drop-down-menu__trigger-assistive-text">Open the menu
        with the enter key and close it with the escape key; use the up and
        down arrow keys to navigate.</span>
    </button>
    .c-drop-down-menu__trigger-assistive-text {
        @include h-hide-visually;
    }
 *
 *   Knowing when to do this isn't always clear and it is very case dependant.
 *
 * Applying Helpers via their *mixin* implementation would only be done in one
 * scenario:
 *
 * - **Inside of Components and Layout Templates:** any multi-line declaration
 *   Helpers should be applied via their mixin, this is to keep all the styles
 *   related to a Component or Layout Template nicely contained. For example,
 *   you may need to truncate a line of text in a site header Layout Template
 *   that is part of a main nav link item—using the "Text truncate" Helper.
 *   The correct way to achieve this would be:
 *
    <a href="some/url" class="o-i360-header__nav-item">List &amp; Subscribers</a>
 *
    .o-i360-header__nav-item {
        […]
        @include h-text-truncate;
    }
 *
 *   Not:
 *
    <a href="some/url" class="o-i360-header__nav-item  h-text-truncate">List &amp;
    Subscribers</a>
 *
 * ----------------------------------------------------------------------------
 *
 * N.B. it is important not to overuse certain Helpers, the exceptions are the
 * "Spacing" Helpers and the "Hide visually" and "Text truncate" Helpers.
 * Overuse can indicate that your UI is not componentised enough, which can
 * lead to a number of problems.
 *
 * ----------------------------------------------------------------------------
 *
 * N.B. some Helpers are available to be applied at any breakpoint the
 * consumer wishes, see "Mixins and Functions -> Apply at breakpoints" to
 * understand how this works.
 *
 * ----------------------------------------------------------------------------
 *
 * Helpers are namespaced with "h" followed by one hyphen, like this:
 *
   h-clear-fix
   h-text-truncate
 *
 * The "h" stands for "helper".
 *
 * ----------------------------------------------------------------------------
