import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';

function sliderTestimonials() {
	Swiper.use([Autoplay, Navigation, Pagination]);

	// Ensuring we don't show buttons if there is just 1 entry outputted
	if ($('.m-slider-testimonials__stories-slide-item ').length <= 1) {
		$('.m-slider-testimonials__stories-slider-wrapper').addClass(
			'm-slider-testimonials__stories-slider-wrapper--disabled',
		);

		$('.js-slider-swiper-testimonials-btn-prev').addClass(
			'js-slider-swiper-testimonials-btn-prev--disabled',
		);
		$('.js-slider-swiper-testimonials-btn-next').addClass(
			'js-slider-swiper-testimonials-btn-next--disabled',
		);
	} else {
		$('.m-slider-testimonials__stories-slider-wrapper').removeClass(
			'm-slider-testimonials__stories-slider-wrapper--disabled',
		);

		$('.js-slider-swiper-testimonials-btn-prev').removeClass(
			'js-slider-swiper-testimonials-btn-prev--disabled',
		);
		$('.js-slider-swiper-testimonials-btn-next').removeClass(
			'js-slider-swiper-testimonials-btn-next--disabled',
		);

		new Swiper('.js-slider-swiper-testimonials', {
			loop: false,
			speed: 600,
			autoplay: {
				delay: 7000,
			},
			slidesPerView: 1,
			spaceBetween: 48,
			navigation: {
				prevEl: '.js-slider-swiper-testimonials-btn-prev',
				nextEl: '.js-slider-swiper-testimonials-btn-next',
			},
			pagination: {
				el: '.js-slider-swiper-testimonials-pagination',
				type: 'bullets',
				clickable: true,
			},
		});
	}
}

export default sliderTestimonials;
