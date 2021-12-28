import MicroModal from 'micromodal';

export default () => {
	/** -----------------------------------------------------------------
	 * Micromodal initialization.
	------------------------------------------------------------------ */

	MicroModal.init({
		awaitCloseAnimation: true,
		onShow: modal => {
			/**
			 * When showing the modal window, forcibly hide the overflows
			 * for the body so that there is no scrolling. Also scroll to
			 * the top of the modal if it is not in the start position.
			 */

			$('body').css('overflow', 'hidden');
			$('.m-modal__overlay').animate({ scrollTop: 0 }, 0);
		},
		onClose: modal => {
			/**
			 * When you close any window, restore the overflow on the visible
			 */

			$('body').css('overflow', 'visible');
		},
	});

	/** -----------------------------------------------------------------
	 * Creation of logic of behavior of buttons inside each modal window.
	------------------------------------------------------------------ */

	let arrayModal = $('.o-i360-team__modal');

	/**
	 * Loop through all instances of the modal window
	 */

	arrayModal.each(index => {
		let thisModalId = arrayModal
			.eq(index)
			.children()
			.attr('id');
		let nextModalNumber = index + 1;
		let prevModalNumber = index - 1;

		/**
		 * Clarifications for extreme indexes.
		 */

		if (index <= 0) {
			prevModalNumber = arrayModal.length - 1;
		} else if (index >= arrayModal.length - 1) {
			nextModalNumber = 0;
		}

		/**
		 * When you click on the 'Next' button, hide the current modal and show
		 *  the next one. Forcibly hide overflows to hidden so that there is
		 *  no scrolling on the page.
		 */

		$('#' + thisModalId)
			.find('.m-modal__next-btn')
			.on('click', () => {
				MicroModal.close(thisModalId);
				$('body').css('overflow', 'hidden');
				MicroModal.show(
					arrayModal
						.eq(nextModalNumber)
						.children()
						.attr('id'),
				);
				$('.m-modal__overlay').animate({ scrollTop: 0 }, 0);
			});

		/**
		 * When you click on the 'Prev' button, hide the current modal and show
		 *  the next one. Forcibly hide overflows to hidden so that there is
		 *  no scrolling on the page.
		 */

		$('#' + thisModalId)
			.find('.m-modal__prev-btn')
			.on('click', () => {
				MicroModal.close(thisModalId);
				$('body').css('overflow', 'hidden');
				MicroModal.show(
					arrayModal
						.eq(prevModalNumber)
						.children()
						.attr('id'),
				);
				$('.m-modal__overlay').animate({ scrollTop: 0 }, 0);
			});

		/**
		 * When you click outside the modal window, it closes. Overflow for body
		 * is also restored.
		 */

		$('#' + thisModalId)
			.find('.m-modal__overlay')
			.on('click', function(e) {
				if ($(e.target).parents('.m-modal__dialog').length === 0) {
					MicroModal.close(thisModalId);
					$('body').css('overflow', 'visible');
				}
			});

		/**
		 * Clicking on the button closes the current modal window. Recovering
		 * overflow for body.
		 */

		$('#' + thisModalId)
			.find('button[aria-label="Close modal"]')
			.on('click', function() {
				MicroModal.close(thisModalId);
				$('body').css('overflow', 'visible');
			});
	});
};
