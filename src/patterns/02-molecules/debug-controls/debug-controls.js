let debugControlsTrigger = '.js-debug-controls-trigger';
let debugControlsPanel = '.js-debug-controls-panel';

let debugControlsTextAlignmentLeft = '.js-debug-left';
let debugControlsTextAlignmentCenter = '.js-debug-center';
let debugControlsTextAlignmentDefault = '.js-debug-default';
let debugControlsLightTextBlackBG = '.js-debug-light-text-black-bg';
let debugControlsDarkTextWhiteBG = '.js-debug-dark-text-white-bg';
let debugControlsDefaultTextDefaultBG = '.js-debug-∂efault-text-∂efault-bg';

export default () => {
	console.log('something1');
	// Toggle CSS class on an element on click
	$(debugControlsTrigger).on('click', function(e) {
		e.preventDefault();
		console.log('something2');
		$(debugControlsPanel).toggleClass('m-debug-controls__panel--active');
	});

	$(debugControlsTextAlignmentLeft).on('click', function(e) {
		e.preventDefault();
		$('.o-dbm').removeClass('o-dbm--align-default o-dbm--align-center');
		$('.o-dbm').addClass('o-dbm--align-left');

		$('.o-hero').removeClass('o-hero--align-default o-hero--align-center');
		$('.o-hero').addClass('o-hero--align-left');
	});

	$(debugControlsTextAlignmentCenter).on('click', function(e) {
		e.preventDefault();
		$('.o-dbm').removeClass('o-dbm--align-left o-dbm--align-default');
		$('.o-dbm').addClass('o-dbm--align-center');

		$('.o-hero').removeClass('o-hero--align-left o-hero--align-default');
		$('.o-hero').addClass('o-hero--align-center');
	});

	$(debugControlsTextAlignmentDefault).on('click', function(e) {
		e.preventDefault();
		$('.o-dbm').removeClass('o-dbm--align-left o-dbm--align-center');
		$('.o-dbm').addClass('o-dbm--align-default');

		$('.o-hero').removeClass('o-hero--align-left o-hero--align-center');
		$('.o-hero').addClass('o-hero--align-default');
	});

	$(debugControlsLightTextBlackBG).on('click', function(e) {
		e.preventDefault();
		$('.o-dbm__bg').removeAttr('style');
		$('.o-dbm__bg').css('background-color', '#000');
		$('.o-dbm').removeClass('o-dbm--color-default o-dbm--color-dark');
		$('.o-dbm').addClass('o-dbm--color-light');

		$('.o-hero').removeClass('o-hero--color-default o-hero--color-dark');
		$('.o-hero').addClass('o-hero--color-light');
	});

	$(debugControlsDarkTextWhiteBG).on('click', function(e) {
		e.preventDefault();
		$('.o-dbm__bg').removeAttr('style');
		$('.o-dbm__bg').css('background-color', '#fff');
		$('.o-dbm').removeClass('o-dbm--color-default o-dbm--color-light');
		$('.o-dbm').addClass('o-dbm--color-dark');

		$('.o-hero').removeClass('o-hero--color-default o-hero--color-light');
		$('.o-hero').addClass('o-hero--color-dark');
	});

	$(debugControlsDefaultTextDefaultBG).on('click', function(e) {
		e.preventDefault();
		$('.o-dbm__bg').removeAttr('style');
		$('.o-dbm').removeClass('o-dbm--color-default o-dbm--color-light');
		$('.o-dbm').addClass('o-dbm--color-default');

		$('.o-hero').removeClass('o-hero--color-dark o-hero--color-light');
		$('.o-hero').addClass('o-hero--color-default');
	});
};
