function socialShare() {
	$('.js-social-share').on('click', function(e) {
		e.preventDefault();

		windowPopup($(this).attr('href'), 600, 400);
	});
}

function windowPopup(url, w, h) {
	// Fixes dual-screen position Most browsers Firefox
	var dualScreenLeft =
		window.screenLeft != undefined ? window.screenLeft : screen.left;
	var dualScreenTop =
		window.screenTop != undefined ? window.screenTop : screen.top;

	var left = screen.width / 2 - w / 2 + dualScreenLeft;
	var top = screen.height / 2 - h / 2 + dualScreenTop;

	window.open(
		url,
		'',
		'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=' +
			w +
			',height=' +
			h +
			',top=' +
			top +
			',left=' +
			left,
	);
}

export default socialShare;
