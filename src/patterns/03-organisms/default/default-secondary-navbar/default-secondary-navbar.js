/* eslint-disable */

function navItemsScroll($elem, $navWrapper) {
	let activeLinkLeftPosition = $elem.position().left;
	let currScrollPosition = $navWrapper.scrollLeft();
	let contWidth = $navWrapper.outerWidth() / 2;
	let activeLinkOuterWidth = $elem.outerWidth() / 2;

	activeLinkLeftPosition =
		activeLinkLeftPosition +
		currScrollPosition -
		contWidth +
		activeLinkOuterWidth;

	$navWrapper.stop().animate(
		{
			scrollLeft: activeLinkLeftPosition,
		},
		'slow',
	);
}

function defaultSecondaryNavbar() {
	let componentClass = 'o-default-secondary-navbar';
	let navControlButtons = $(`.${componentClass}__scroll-btn`);
	let navWrapper = $(`.${componentClass}__inner`);
	let navScrollableContent = $(`.${componentClass}__list`);
	let navLink = $(`.${componentClass}__list-item-link`);

	navLink.on('click', function(e) {
		e.preventDefault();

		navLink.removeClass(`${componentClass}__list-item-link--active`);

		$('html, body').animate(
			{
				scrollTop:
					$($(this).attr('href')).offset().top +
					2 -
					$(`.${componentClass}`).outerHeight() -
					$('.o-i360-header').outerHeight(),
			},
			'slow',
		);

		$(this).addClass(`${componentClass}__list-item-link--active`);
	});

	$(window).on('scroll', function() {
		scrollNav();
	});

	function scrollNav() {
		let sectionIdCollection = [];

		$(
			`.${componentClass}__list-item .${componentClass}__list-item-link`,
		).each(function() {
			let sectionId = $(this)
				.attr('href')
				.split('#')[1];

			sectionIdCollection.push(sectionId);

			if (
				$(window).scrollTop() +
					$(`.${componentClass}`).outerHeight() +
					$('.o-i360-header').outerHeight() >=
					$(`#${sectionId}`).offset().top &&
				$(window).scrollTop() +
					$(`.${componentClass}`).outerHeight() +
					$('.o-i360-header').outerHeight() <
					$(`#${sectionId}`).offset().top +
						$(`#${sectionId}`).outerHeight()
			) {
				$(`.${componentClass}`).removeClass(
					`${componentClass}--hidden`,
				);

				navLink.removeClass(
					`${componentClass}__list-item-link--active`,
				);

				$(`.${componentClass}__list`)
					.find('a[href="#' + sectionId + '"]')
					.addClass(`${componentClass}__list-item-link--active`);

				if (
					navLink.hasClass(
						`${componentClass}__list-item-link--active`,
					)
				) {
					navItemsScroll(
						$(`.${componentClass}__list-item-link--active`),
						navWrapper,
					);
				}
			}
		});

		let firstSectionWithId = sectionIdCollection[0];
		let lastSectionWithId =
			sectionIdCollection[sectionIdCollection.length - 1];

		if (
			$(window).scrollTop() +
				$('.o-i360-header').outerHeight() +
				$(`.${componentClass}`).outerHeight() <=
			$(`#${firstSectionWithId}`).offset().top
		) {
			navLink.removeClass(`${componentClass}__list-item-link--active`);
		}

		if (
			$(window).scrollTop() +
				$('.o-i360-header').outerHeight() +
				$(`.${componentClass}`).outerHeight() >=
			$(`#${lastSectionWithId}`).offset().top +
				$(`#${lastSectionWithId}`).outerHeight()
		) {
			navLink.removeClass(`${componentClass}__list-item-link--active`);
			$(`.${componentClass}`).addClass(`${componentClass}--hidden`);
		}

		if (
			$(window).scrollTop() + $('.o-i360-header').outerHeight() >
				$(`.${componentClass}`).offset().top &&
			$(window).scrollTop() +
				$('.o-i360-header').outerHeight() +
				$(`.${componentClass}`).outerHeight() <=
				$(`#${lastSectionWithId}`).offset().top +
					$(`#${lastSectionWithId}`).outerHeight()
		) {
			$(`.${componentClass}`).addClass(`${componentClass}--scrollable`);
		} else {
			$(`.${componentClass}`).removeClass(
				`${componentClass}--scrollable`,
			);
		}
	}

	navControlButtons.on('click', function(e) {
		e.preventDefault();

		if ($(this).is(`.${componentClass}__scroll-btn--prev`)) {
			navWrapper.animate(
				{
					scrollLeft: '-=280px',
				},
				'slow',
			);
		} else if ($(this).is(`.${componentClass}__scroll-btn--next`)) {
			navWrapper.animate(
				{
					scrollLeft: '+=280px',
				},
				'slow',
			);
		}

		return false;
	});

	navWrapper.scroll(function() {
		if (this.scrollLeft > 0) {
			navControlButtons
				.filter(`.${componentClass}__scroll-btn--prev`)
				.addClass(`${componentClass}__scroll-btn--visible`);
			navControlButtons
				.filter(`.${componentClass}__scroll-btn--prev`)
				.parent()
				.addClass(`${componentClass}__scroll-btn-wrapper--visible`);
		} else {
			navControlButtons
				.filter(`.${componentClass}__scroll-btn--prev`)
				.removeClass(`${componentClass}__scroll-btn--visible`);
			navControlButtons
				.filter(`.${componentClass}__scroll-btn--prev`)
				.parent()
				.removeClass(`${componentClass}__scroll-btn-wrapper--visible`);
		}

		if (
			navScrollableContent.outerWidth() - this.scrollLeft >
			navWrapper.outerWidth() + 1
		) {
			// ?
			navControlButtons
				.filter(`.${componentClass}__scroll-btn--next`)
				.addClass(`${componentClass}__scroll-btn--visible`);
			navControlButtons
				.filter(`.${componentClass}__scroll-btn--next`)
				.parent()
				.addClass(`${componentClass}__scroll-btn-wrapper--visible`);
		} else {
			navControlButtons
				.filter(`.${componentClass}__scroll-btn--next`)
				.removeClass(`${componentClass}__scroll-btn--visible`);
			navControlButtons
				.filter(`.${componentClass}__scroll-btn--next`)
				.parent()
				.removeClass(`${componentClass}__scroll-btn-wrapper--visible`);
		}
	});

	navWrapper.trigger('scroll');
}

export default defaultSecondaryNavbar;
