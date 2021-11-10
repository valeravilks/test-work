import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';

function sliderImages() {
	Swiper.use([Autoplay, Navigation, Pagination]);

	new Swiper('.js-slider-swiper-images', {
		loop: true,
		speed: 600,
		autoplay: false,
		slidesPerView: 1,
		spaceBetween: 15,
		navigation: {
			prevEl: '.js-slider-swiper-images-btn-prev',
			nextEl: '.js-slider-swiper-images-btn-next',
		},
		pagination: {
			el: '.js-slider-swiper-image-pagination',
			type: 'bullets',
			clickable: true,
		},
	});
}

export default sliderImages;
