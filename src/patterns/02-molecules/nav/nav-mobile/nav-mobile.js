/*
 * Nav Dropdowns
 *
 * runs the functionality of clicking the arrow in the mobile menu dropdown
 */

function navMob($) {
	const selector = '.js-nav-drop';
	const activeClass = 'is-active';

	$(selector).click(function() {
		$(this).toggleClass('m-nav__toggle-wrapper--active');
		$(this)
			.toggleClass(activeClass)
			.next('ul')
			.slideToggle(250);
		$(this)
			.children('.js-plus-toggle')
			.toggleClass('a-plus-toggle--opened');
	});
}

export default navMob;
