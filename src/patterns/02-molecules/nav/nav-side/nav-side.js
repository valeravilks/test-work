/*
 * Nav Dropdown
 *
 * runs the functionality of clicking the arrow in the sidebar dropdown
 */

function navSide() {
	$('.js-nav-side-toggle').click(function() {
		$(this)
			.find('.a-plus-toggle')
			.toggleClass('a-plus-toggle--opened');
		$(this)
			.next('ul')
			.slideToggle();
	});
}

export default navSide;
