function cardsHolderViewMore() {
	$('.o-default-image-cards__show-more-btn ').on('click', function(e) {
		e.preventDefault();

		$(this).text(function(i, text) {
			return text.trim().toLocaleLowerCase() === 'show more'
				? 'Show Less'
				: 'Show More';
		});

		$('.o-default-image-cards__item-wrapper--hide').each(function(
			index,
			elem,
		) {
			if (
				$(this).index() > 5 &&
				$(this).hasClass('o-default-image-cards__item-wrapper--hide')
			) {
				$(this).fadeToggle();
			}
		});
	});
}

export default cardsHolderViewMore;
