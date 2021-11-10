function clickActionOutsideArea(event, componentClass) {
	if (
		$(event.target).is(`.${componentClass}`) === false &&
		$(`.${componentClass}`).has(event.target).length === 0
	) {
		if (
			$(`.${componentClass}__mobile-current-item`)
				.children('i')
				.hasClass('fa-chevron-down--active')
		) {
			$(`.${componentClass}__mobile-current-item`).trigger('click');
		}
	}
}

function navigateCategory() {
	const componentClassName = 'm-nav-category';
	const navComponentName = 'm-nav-category__nav';

	$(`.${componentClassName}__mobile-current-item-txt`).text(
		$('.m-nav-category__nav .current_page_item .current-menu-item').text(),
	);

	$(`.${componentClassName}__mobile-current-item`).on('click', function() {
		let self = $(this);

		$(`.${navComponentName}`).slideToggle(400);

		self.children('i').toggleClass('fa-chevron-down--active');

		$(window).resize(function() {
			if (window.innerWidth >= 992) {
				$(`.${navComponentName}`).css('display', 'flex');
			} else if (
				window.innerWidth < 992 &&
				$(`.${navComponentName}`).css('display') === 'flex'
			) {
				if (self.children('i').hasClass('fa-chevron-down--active')) {
					$(`.${navComponentName}`).css('display', 'block');
				} else {
					$(`.${navComponentName}`).css('display', 'none');
				}
			}
		});
	});

	$(document).on('click', function(e) {
		if (window.innerWidth < 992) {
			clickActionOutsideArea(e, componentClassName);
		}
	});
}

export default navigateCategory;
