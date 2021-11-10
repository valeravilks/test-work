function defaultGallery() {
	$('.js-animated-thumbnails').lightGallery({
		selector: '.o-default-gallery__img',
		thumbnail: true,
		animateThumb: true,
		showThumbByDefault: false,
		mode: 'lg-slide',
	});
}

export default defaultGallery;
