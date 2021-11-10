/*
 * Headroom
 *
 * Calling the Headroom.js object
 */
/* eslint-disable */
let Headroom = require('headroom.js');

function header() {
	// Grab an element
	let header = document.querySelector('#header');

	// Construct an instance of Headroom, passing the element
	let headroom = new Headroom(header, {
		offset: 40,
		tolerance: {
			up: 15,
			down: 25,
		},
		classes: {
			// when element is initialised
			initial: 'l-headroom',
			// when scrolling up
			pinned: 'l-headroom--pinned',
			// when scrolling down
			unpinned: 'l-headroom--unpinned',
			// when above offset
			top: 'l-headroom--top',
			// when below offset
			notTop: 'l-headroom--not-top',
			// when at bottom of scoll area
			bottom: 'l-headroom--bottom',
			// when not at bottom of scroll area
			notBottom: 'l-headroom--not-bottom',
		},
	});

	// Initialise
	headroom.init();
}

export default header;
