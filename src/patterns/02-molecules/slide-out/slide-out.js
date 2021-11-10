let menuItem = '.js-menu-item';
let activeMenuClass = 'm-slide-out__nav-menu--active';

export function defaultSlideOut() {
	// add for active on hover
	$(menuItem).hover(
		function() {
			$(menuItem).removeClass(activeMenuClass);
			$(this).addClass(activeMenuClass);
		},
		function() {
			$(menuItem).removeClass(activeMenuClass);
		},
	);
}
