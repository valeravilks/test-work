function showAccordion() {
	$('.js-accordion').click(function(e) {
		e.preventDefault();

		$(this)
			.parent()
			.parent()
			.toggleClass('is-active');
		$(this)
			.parent()
			.siblings('.m-accordion__group-inner')
			.find('.m-accordion__content')
			.slideToggle('fast');
	});

	$('.m-accordion__title-wrapper').on('click', function() {
		$(this)
			.parent()
			.siblings('.m-accordion__track')
			.find('.js-accordion')
			.trigger('click');
	});
}

export default showAccordion;
