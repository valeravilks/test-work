import './util/modernizr';
import './util/polyfills';
import '../style.scss';
import './core/core';
import 'magnific-popup';

import jQuery from 'jquery';

// import Rellax from 'rellax';
/*
 * Atoms
 */
import defaultRelatedArticles from '../patterns/01-atoms/post/related-articles/related-articles';
import scrollToTop from '../patterns/01-atoms/scroll-to-top/scroll-to-top';
import socialShare from '../patterns/02-molecules/social/social-share/social-share';
/*
 * Molecules
 */
import showAccordion from '../patterns/02-molecules/default/accordion/accordion';
import { hamburger } from '../patterns/02-molecules/default/nav/hamburger/hamburger';
// import mapBlock from '../components/objects-default/map/map';
import navigateCategory from '../patterns/02-molecules/default/nav/nav-category/nav-category';
import navMob from '../patterns/02-molecules/default/nav/nav-mobile/nav-mobile';
import searchBar from '../patterns/02-molecules/default/search/search-bar/search-bar';
import { defaultSlideOut } from '../patterns/02-molecules/default/slide-out/slide-out';
/*
 * Sample Components. Remove in production!
 */
import sampleCountingNumber from '../patterns/02-molecules/sample/sample-counting-number/sample-counting-number';
import sampleDropdown from '../patterns/02-molecules/sample/sample-dropdown/sample-dropdown';
import sampleFilter from '../patterns/02-molecules/sample/sample-filter/sample-filter';
import sampleMap from '../patterns/02-molecules/sample/sample-map/sample-map';
import sampleSlider from '../patterns/02-molecules/sample/sample-slider/sample-slider';
import sampleSplitText from '../patterns/02-molecules/sample/sample-splittext/sample-splittext';
import sampleWaypoint from '../patterns/02-molecules/sample/sample-waypoint/sample-waypoint';
import headRoom from '../patterns/03-organisms/custom/custom-header/header';
/*
 * Organisms
 */
import defaultSecondaryNavbar from '../patterns/03-organisms/default/default-secondary-navbar/default-secondary-navbar';
import defaultImagesSlider from '../patterns/03-organisms/default/slider-images/slider-images.js';
// import showInfoVideo from '../components/blocks-common/info-video/info-video';
import defaultTeamMembers from '../patterns/03-organisms/default/default-team/default-team';
import defaultTestimonials from '../patterns/03-organisms/default/default-testimonials/default-testimonials.js';
import defaultArticleSideNavigation from '../patterns/04-templates/default/default-article-scrolling-nav-single/default-article-scrolling-nav-single';
/*
 * Plop Entry (do not remove)
 */
////DO NOT ERASE OR PLOP IMPORTING WILL FAIL
////IMPORT FROM PLOP
/*
 * Misc
 */
import parallaxScroll from './custom/parallax/parallax-scroll';
import scrollToAnchor from './custom/scroll/scroll-to-anchor';

/*
 * Javascript Module Caller
 *
 * functions below are only run if the component exists (verified through a "data-module" in the html)
 * in the ajax container or page. Barba.js instantiates the functions below on container reload as well.
 *
 * Place in alphabetical order
 */
const app = {
	showAccordion,
	headRoom,
	navigateCategory,
	searchBar,
	scrollToTop,
	socialShare,
	hamburger,
	defaultSlideOut,
	// mapBlock,
	// showInfoVideo,
	defaultArticleSideNavigation,
	defaultTeamMembers,
	defaultSecondaryNavbar,
	defaultTestimonials,
	defaultImagesSlider,
	defaultRelatedArticles,
	sampleCountingNumber,
	sampleDropdown,
	sampleFilter,
	sampleMap,
	sampleSlider,
	sampleSplitText,
	sampleWaypoint,
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

	// // Parallax. Move to different folder
	// $(window).on('load', function() {
	// 	let rellax = new Rellax('.rellax', {
	// 		center: true,
	// 	});
	// });
});

jQuery(window).scroll(function() {
	parallaxScroll(jQuery);

	// let scroll = $(window).scrollTop();
	//
	// if (scroll >= 10) {
	// 	$('.l-banner').addClass('l-banner--not-top');
	// 	$('.o-header').addClass('l-headroom--not-top');
	// } else {
	// 	$('.l-banner').removeClass('l-banner--not-top');
	// 	$('.o-header').removeClass('l-headroom--not-top');
	// }
});
