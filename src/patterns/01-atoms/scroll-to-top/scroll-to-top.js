/*
 * ScrollToTop
 *
 * runs the funcitonality of the scroll to top button that appears at the bottom right of the website
 */
/* eslint-disable */

function scrollToTop() {
	let didScroll;
	let speed = 600;
	let selector = '.js-scroll-to-top';
	let activeClass = 'a-scroll-to-top--active';
	let activeDistance = 200;
	let scrollTo = 0;

	$(window).scroll(function() {
		didScroll = true;
	});

	// run hasScrolled() and reset didScroll status
	setInterval(function() {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 250);

	function hasScrolled() {
		if ($(window).scrollTop() > activeDistance) {
			$(selector).addClass(activeClass);
		} else {
			$(selector).removeClass(activeClass);
		}
	}

	$(selector).click(function() {
		$('html, body').animate(
			{
				scrollTop: scrollTo,
			},
			speed,
		);
		return false;
	});
}

export default scrollToTop;
