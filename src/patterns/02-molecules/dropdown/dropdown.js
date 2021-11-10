const componentClass = 'm-dropdown';

function clickActionOutsideAreaDefaultDropdown(e) {
	if (
		$(e.target).is($('.js-dropdown')) === false &&
		$('.js-dropdown').has(e.target).length === 0 &&
		$(e.target).is($(`.${componentClass}__list`)) === false &&
		$(`.${componentClass}__list`).has(e.target).length === 0
	) {
		$(`.${componentClass}__arrow`).removeClass(
			`${componentClass}__arrow--active`,
		);
		$(`.${componentClass}__list`).removeClass(
			`${componentClass}__list--open`,
		);
	}
}

function dropdown() {
	$('.js-dropdown').on('click', function(e) {
		e.preventDefault();

		$(this)
			.find(`.${componentClass}__arrow`)
			.toggleClass(`${componentClass}__arrow--active`);
		$(this)
			.siblings(`.${componentClass}__list`)
			.toggleClass(`${componentClass}__list--open`);
	});

	$(document).on('click', function(e) {
		if (
			$(`.${componentClass}__list`).hasClass(
				`${componentClass}__list--open`,
			)
		) {
			clickActionOutsideAreaDefaultDropdown(e);
		}
	});

	$(`.${componentClass}__link`).on('click', function(e) {
		e.preventDefault();

		$(`.${componentClass}__inner-txt`).text($(this).text());

		if (
			$(`.${componentClass}__list`).hasClass(
				`${componentClass}__list--open`,
			)
		) {
			$(`.${componentClass}__arrow`).removeClass(
				`${componentClass}__arrow--active`,
			);
			$(`.${componentClass}__list`).removeClass(
				`${componentClass}__list--open`,
			);
		}
	});
}

export default dropdown;
