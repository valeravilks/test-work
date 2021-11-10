// Do something on click
$('.js-target-element').click(function() {
	//Some code
});

// Toggle CSS class on an element on click
$('.js-target-element').on('click', function(e) {
	$('.m-card-something').toggleClass('m-card-something--active'); //you can list several class names
	e.preventDefault();
});

// Do something after XX seconds. Helpful for debugging
setTimeout(function() {
	console.log('some JS code was fired');
}, 2000);

// Fire some JS if a user scrolls to it (requires waypoints.js). Don't use this for CSS animations (WOW.js takes care of that)
import 'waypoints/lib/noframework.waypoints.min.js';

const waypoint = new Waypoint({
	offset: '25%',
	element: document.getElementById('id_based_trigger'),
	handler: () => {
		console.log('some JS code was fired');
		notify('Basic waypoint triggered');

		// Prevent waypoint from firing again
		this.destroy();
	},
});

let cardLink = $(this).attr('href');

$('.js-body').addClass('h-scroll-lock');

// Swiper example
const abcSliderSomething = 'c-ct-testimonials';

Swiper.use([Autoplay, Navigation, Pagination]);

new Swiper(`.${abcSliderSomething}-slider-something`, {
	loop: false,
	speed: 600,
	slidesPerView: 1,
	spaceBetween: 48,
	centeredSlides: true,
	centeredSlidesBounds: true,
	navigation: {
		prevEl: `.${abcSliderSomething}__slider-btn-prev`,
		nextEl: `.${abcSliderSomething}__slider-btn-next`,
	},
	pagination: {
		el: '.js-slider-something-swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	breakpoints: {
		992: {
			width: 608,
		},
	},
});

// $(`.${componentClass}__expand-btn`).each(function() {
//
// }
//
//
// $(window).on('resize', function() {
// 	$(`.${componentClass}__expand-btn`).each(function() {
// 		if ($(window).outerWidth() >= 544) {
// 			if (
// 				!$(this).hasClass(`${componentClass}__expand-btn--active`)
// 			) {
// 				$(this)
// 					.siblings(`.${componentClass}__info-main-wrapper`)
// 					.slideDown();
// 			}
// 		} else {
// 			if ($(this).hasClass(`${componentClass}__expand-btn--active`)) {
// 				$(this)
// 					.siblings(`.${componentClass}__info-main-wrapper`)
// 					.slideDown();
// 			} else {
// 				$(this)
// 					.siblings(`.${componentClass}__info-main-wrapper`)
// 					.slideUp();
// 			}
// 		}
// 	});
// });
