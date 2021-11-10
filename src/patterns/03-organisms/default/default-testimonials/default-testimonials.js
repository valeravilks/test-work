import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';

function defaultTestimonials() {
	Swiper.use([Autoplay, Navigation, Pagination]);

	if ($('.o-default-testimonials__stories-slide-item ').length <= 1) {
		$('.o-default-testimonials__stories-slider-wrapper').addClass(
			'o-default-testimonials__stories-slider-wrapper--disabled',
		);

		$('.o-default-testimonials__stories-slider-btn-prev').addClass(
			'o-default-testimonials__stories-slider-btn-prev--disabled',
		);
		$('.o-default-testimonials__stories-slider-btn-next').addClass(
			'o-default-testimonials__stories-slider-btn-next--disabled',
		);
	} else {
		$('.o-default-testimonials__stories-slider-wrapper').removeClass(
			'o-default-testimonials__stories-slider-wrapper--disabled',
		);

		$('.o-default-testimonials__stories-slider-btn-prev').removeClass(
			'o-default-testimonials__stories-slider-btn-prev--disabled',
		);
		$('.o-default-testimonials__stories-slider-btn-next').removeClass(
			'o-default-testimonials__stories-slider-btn-next--disabled',
		);

		new Swiper('.o-default-testimonials__stories-slider-container', {
			loop: false,
			speed: 600,
			autoplay: {
				delay: 7000,
			},
			slidesPerView: 1,
			spaceBetween: 48,
			navigation: {
				prevEl: '.o-default-testimonials__stories-slider-btn-prev',
				nextEl: '.o-default-testimonials__stories-slider-btn-next',
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			},
		});
	}
}

export default defaultTestimonials;
