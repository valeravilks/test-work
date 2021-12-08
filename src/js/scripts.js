import './util/modernizr';
import './util/polyfills';
import '../style.scss';
import './core/core';
import 'magnific-popup';

/*
 * Atoms
 */
import scrollToTop from '../patterns/01-atoms/scroll-to-top/scroll-to-top';
import floatingCta from '../patterns/01-atoms/buttons/button-floating-cta/button-floating-cta';
/*
 * Molecules
 */
import showAccordion from '../patterns/02-molecules/accordion/accordion';
import dropdown from '../patterns/02-molecules/dropdown/dropdown';
import mapBlock from '../patterns/02-molecules/map/map';
import modal from '../patterns/02-molecules/modal/modal';
import { hamburger } from '../patterns/02-molecules/nav/hamburger/hamburger';
import navigateCategory from '../patterns/02-molecules/nav/nav-category/nav-category';
import navMob from '../patterns/02-molecules/nav/nav-mobile/nav-mobile';
import searchBar from '../patterns/02-molecules/search/search-bar/search-bar';
import { defaultSlideOut } from '../patterns/02-molecules/slide-out/slide-out';
import socialShare from '../patterns/02-molecules/social/social-share/social-share';
import gallery from '../patterns/02-molecules/gallery/gallery';
import sliderImages from '../patterns/02-molecules/slider/slider-images/slider-images';
import sliderTestimonials from '../patterns/02-molecules/slider/slider-testimonials/slider-testimonials';
import debugControls from '../patterns/02-molecules/debug-controls/debug-controls';
/*
 * Organisms
 */
import header from '../patterns/03-organisms/custom/i360-header/i360-header';
import defaultFilter from '../patterns/03-organisms/default/default-filter/default-filter';
import defaultSecondaryNavbar from '../patterns/03-organisms/default/default-secondary-navbar/default-secondary-navbar';
import defaultTeamMembers from '../patterns/03-organisms/default/default-team/default-team';
import defaultArticleSideNavigation from '../patterns/04-templates/default/default-article-scrolling-nav-single/default-article-scrolling-nav-single';
/*
 * Misc
 */
import parallaxScroll from './custom/parallax/parallax-scroll';
import scrollToAnchor from './custom/scroll/scroll-to-anchor';

/*
 * Plop Entry (do not remove)
 */
////DO NOT ERASE OR PLOP IMPORTING WILL FAIL
////IMPORT FROM PLOP
import clickableVideo from '../patterns/03-organisms/custom/i360-clickable-video/i360-clickable-video';
import tabs from '../patterns/02-molecules/tabs/tabs';

/*
 * Module Caller
 *
 * functions below are only run if the component exists (verified through a "data-module" in the html)
 * in the ajax container or page. Barba.js instantiates the functions below on container reload as well.
 *
 * Place in alphabetical order
 */
const app = {
	showAccordion,
	sliderImages,
	header,
	navigateCategory,
	searchBar,
	scrollToTop,
	floatingCta,
	socialShare,
	hamburger,
	defaultSlideOut,
	modal,
	mapBlock,
	debugControls,
	defaultArticleSideNavigation,
	defaultTeamMembers,
	defaultSecondaryNavbar,
	sliderTestimonials,
	defaultFilter,
	dropdown,
	gallery,
};

let calledModulesNames = [];
app.instantiate = function(elem) {
	const $this = $(elem);
	const module = $this.attr('data-module');

	if (module === undefined) {
		throw 'Module not defined (use data-module="")';
	} else if (module in app) {
		if ($this.attr('data-initialized') === 'true') {
			return;
		}
		new app[module](elem);
		$this.attr('data-initialized', true);
	} else {
		throw "Module '" + module + "' not found";
	}
};

jQuery(document).ready(function() {
	scrollToAnchor($);
	navMob($);

	// Component functions that should only run if the component exists in the ajax container or page.
	$('[data-module]').each(function() {
		if ($.inArray($(this).data('module'), calledModulesNames) == -1) {
			app.instantiate(this);

			calledModulesNames.push($(this).data('module'));
		}
	});
});

jQuery(window).scroll(function() {
	parallaxScroll($);
});
