import MicroModal from 'micromodal';

export default () => {
	let componentClass = 'm-card-simple-alt';

	// Brings modal container above all DOM elems
	$(`.${componentClass}--contains-modal`).on('click', function() {
		$(this).addClass(`${componentClass}--contains-modal-active`);
	});

	// Modal out-click logic
	$(document).on('click', function(e) {
		if (
			$(e.target).is(`.a-video`) === false &&
			$(`.a-video`).has(e.target).length === 0 &&
			$(e.target).is(`.m-modal__link`) === false &&
			$(`.m-modal__link`).has(e.target).length === 0
		) {
			$(`.${componentClass}--contains-modal`).removeClass(
				`${componentClass}--contains-modal-active`,
			);
		}
	});

	MicroModal.init({
		// disableScroll: true, // [6]
		awaitOpenAnimation: false, // [8]
		awaitCloseAnimation: true, // [9]
		onShow: modal => {
			console.log('open modal');
			$('body').css('overflow', 'hidden');
			$('.m-modal__overlay').animate({ scrollTop: 0 }, 0);
		}, // [1]
		onClose: modal => {
			console.log('close modal');
			$('body').css('overflow', 'visible');
		},
	});

	// Modal button next and prev logic
	let arrayModal = $('.o-i360-team__modal');

	arrayModal.each(index => {
		let thisModalId = arrayModal
			.eq(index)
			.children()
			.attr('id');
		let nextModalNumber = index + 1;
		let prevModalNumber = index - 1;

		if (index <= 0) {
			prevModalNumber = arrayModal.length - 1;
		} else if (index >= arrayModal.length - 1) {
			nextModalNumber = 0;
		}

		$('#' + thisModalId)
			.find('.m-modal_modal-next')
			.on('click', () => {
				MicroModal.close(thisModalId);
				console.log('nextModalNumber: ' + nextModalNumber);
				$('body').css('overflow', 'hidden');
				MicroModal.show(
					arrayModal
						.eq(nextModalNumber)
						.children()
						.attr('id'),
				);
				$('.m-modal__overlay').animate({ scrollTop: 0 }, 0);
			});

		$('#' + thisModalId)
			.find('.m-modal_modal-prev')
			.on('click', () => {
				MicroModal.close(thisModalId);
				$('body').css('overflow', 'hidden');
				MicroModal.show(
					arrayModal
						.eq(prevModalNumber)
						.children()
						.attr('id'),
				);
				console.log('scroll');
				$('.m-modal__overlay').animate({ scrollTop: 0 }, 0);
			});

		$('#' + thisModalId)
			.find('.m-modal__overlay')
			.on('click', function(e) {
				if ($(e.target).parents('.m-modal__dialog').length === 0) {
					MicroModal.close(thisModalId);
					$('body').css('overflow', 'visible');
				}
			});

		// An event to force the current modal to close.
		// Fixed incorrect work of the "data-micromodal-close" attribute.
		$('#' + thisModalId)
			.find('button[aria-label="Close modal"]')
			.on('click', function() {
				MicroModal.close(thisModalId);
				$('body').css('overflow', 'visible');
			});
	});
};
