function gallery() {
	$('.js-gallery').lightGallery({
		selector: '.js-gallery-img',
		thumbnail: true,
		animateThumb: true,
		showThumbByDefault: false,
		mode: 'lg-slide',
	});
}

export default gallery;
