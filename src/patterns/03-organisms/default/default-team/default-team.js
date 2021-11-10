let mixitup;

$(function() {
	$('[data-module-identifier]').each(function() {
		if (this.getAttribute('data-module-identifier') == 'js-team-member') {
			mixitup = require('mixitup');
		}
	});
});

function showJSTeamMembers() {
	const componentClass = 'o-default-team';

	$(`.${componentClass}__member-img-link`).on('click', function(e) {
		e.preventDefault();

		let cardLink = $(this).attr('href');
		let currentCardIdentifier = cardLink
			.substring(1, cardLink.length)
			.trim();

		$(`#${currentCardIdentifier}`)
			.removeClass(`${componentClass}__member-info-modal--unfoldOut`)
			.addClass(`${componentClass}__member-info-modal--unfoldIn`);

		$('.js-body').addClass('h-scroll-lock');
	});

	$(`.${componentClass}__member-info-modal-close-btn`).on(
		'click',
		function() {
			$(this)
				.parent()
				.parent()
				.removeClass(`${componentClass}__member-info-modal--unfoldIn`)
				.addClass(`${componentClass}__member-info-modal--unfoldOut`);
			$('.js-body').removeClass('h-scroll-lock');
		},
	);

	let mixer = mixitup(`.${componentClass}__members-wrapper`, {
		animation: {
			duration: 500,
		},
		load: {
			filter: $(
				`.${componentClass}__corporate-position-terms-list li:first-child`,
			).data('filter'),
		},
		callbacks: {
			onMixEnd: function(state) {
				let chosenFilterDataAttr = state.triggerElement.getAttribute(
					'data-filter',
				);
				let allShownMembers = state.show;

				if ($(window).outerWidth() < 544) {
					if (state.totalShow > 6) {
						$.each(allShownMembers, function(index) {
							if (index > 5) {
								$(this).hide();
							} else {
								$(this).show();
							}
						});

						$(`.${componentClass}__members-view-more`)
							.attr('data-term-filter', chosenFilterDataAttr)
							.show();
					} else {
						$(`.${componentClass}__members-view-more`).hide();
					}
				}
			},
		},
	});

	let mixerState = mixer.getState();

	if (
		mixerState.id != '' &&
		mixerState.totalShow > 6 &&
		$(window).outerWidth() < 544
	) {
		$(
			`.${componentClass}__corporate-position-terms-list li:first-child`,
		).trigger('click');
	}

	$(`.${componentClass}__members-view-more`).on('click', function() {
		let viewMoreDataTermFilter = this.getAttribute('data-term-filter');
		let _self = $(this);

		$(`.${componentClass}__member-wrapper`).each(function() {
			let memberWrapperClassnames = $(this).attr('class');

			if (viewMoreDataTermFilter != 'all') {
				if (
					memberWrapperClassnames.includes(
						viewMoreDataTermFilter.split('.')[1],
					)
				) {
					if ($(this).css('display') == 'none') {
						$(this).fadeIn(300);
					}
				}
			} else {
				if ($(this).css('display') == 'none') {
					$(this).fadeIn(300);
				}
			}
		});

		_self.hide();
	});
}

export default showJSTeamMembers;
