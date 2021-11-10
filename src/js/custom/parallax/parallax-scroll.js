/**
 * Used to show parallax effect in heros. Does NOT work if used for sections below the hero
 */

function parallaxScroll($) {
	var scrollDistance = $(window).scrollTop();
	var $container = $('.js-parallax');
	var opacityGroup = '.js-parallax__opacity';
	var translateGroup = '.js-parallax__translate';

	// To Do: Add Modernizr
	// if (!Modernizr.touch) {
	//alter opacity
	$container.find(opacityGroup).css('opacity', 1 - scrollDistance / 500);

	//alter scrolling speed

	$container
		.find(translateGroup)
		.css(
			'transform',
			'translate3d(0px,' + 0.2 * scrollDistance + 'px, 0px)',
		);
	// }
}

module.exports = parallaxScroll;
