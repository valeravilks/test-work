function cardsHolderViewMore() {
	$('.o-i360-cards-simple__show-more-btn').on('click', function(e) {
		e.preventDefault();

		$(this).text(function(i, text) {
			return text.trim().toLocaleLowerCase() === 'show more'
				? 'Show Less'
				: 'Show More';
		});

		$('.o-i360-cards-simple__item-wrapper--hide').each(function(
			index,
			elem,
		) {
			if (
				$(this).index() > 5 &&
				$(this).hasClass('o-i360-cards-simple__item-wrapper--hide')
			) {
				$(this).fadeToggle();
			}
		});
	});
}

export default cardsHolderViewMore;
