import MicroModal from 'micromodal';

export default () => {
	MicroModal.init({
		disableScroll: true, // [6]
		awaitOpenAnimation: false, // [8]
		awaitCloseAnimation: true, // [9]
	});
};
