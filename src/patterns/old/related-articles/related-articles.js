import Swiper, { Navigation, Pagination } from 'swiper';

function defaultRelatedArticles() {
	Swiper.use([Navigation, Pagination]);

	let swiper = new Swiper('.swiper-container', {
		speed: 1000,
		slidesPerView: 1,
		spaceBetween: 20,
		navigation: {
			prevEl: '.js-slider-prev',
			nextEl: '.js-slider-next',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			992: {
				slidesPerView: 3,
			},
		},
	});
}

export default defaultRelatedArticles;
