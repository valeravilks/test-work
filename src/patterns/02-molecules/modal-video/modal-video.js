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
		disableScroll: true, // [6]
		awaitOpenAnimation: false, // [8]
		awaitCloseAnimation: true, // [9]
	});
};
