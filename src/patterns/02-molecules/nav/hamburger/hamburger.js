/*
 * hamburger
 *
 * runs the functionality of clicking the hamburger icon in the top nav
 */

let selector = '.js-hamburger';
let activeClass = 'is-active';
let bodyActiveClass = 'h-scroll-lock nav-active';
let headerActiveClass = 'o-header--color-menu';
let headerActiveClass2 = 'o-header--hamburger-active';
let navMenu = '.js-slide-out';
let navMenuActiveClass = 'm-slide-out--active';
let headerSearchButton = 'o-header__search-button';
let searchBar = 'm-search-bar';

export function hamburger() {
	$(selector).click(function(e) {
		e.preventDefault();
		$(selector).toggleClass(activeClass);
		$('.js-body').toggleClass(bodyActiveClass);
		$('.js-header')
			.toggleClass(headerActiveClass)
			.toggleClass(headerActiveClass2);
		$(navMenu).toggleClass(navMenuActiveClass);

		$(`.${headerSearchButton}`).toggleClass(`${headerSearchButton}--anim`);

		if ($(`.${searchBar}`).hasClass(`${searchBar}--active`)) {
			$(selector)
				.parent()
				.siblings(headerSearchButton)
				.trigger('click');
		}
	});

	$(window).on('resize', function() {
		if ($(window).width() >= 992) {
			if ($('.header__hamburger').hasClass('is-active')) {
				$('.header__hamburger').trigger('click');
			}
		}
	});
}

export function hamburgerClose() {
	$(selector).removeClass(activeClass);
	$('.js-body').removeClass(bodyActiveClass);
	$('.js-header')
		.removeClass(headerActiveClass)
		.removeClass(headerActiveClass2);
	$(navMenu).removeClass(navMenuActiveClass);
}
