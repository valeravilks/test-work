/*
 * MixItUp Multi Filtering Plugin
 *
 */
let mixitup = require('mixitup');
let mixItUpMultiFilterExtension = require('./mixitup-multifilter');

function setFieldsFilter() {
	mixitup.use(mixItUpMultiFilterExtension);
	var activeId = jQuery('#default-active').attr('data-filter');
	var activeType = jQuery('#default-active').attr('data-display');
	var mixer = mixitup(
		'.c-location-map__locations',
		{
			selectors: {
				target: '.mix',
			},
			animation: {
				enable: false,
			},
			multifilter: {
				enable: true, // enable the multifilter extension for the mixer
				parseOn: 'onclick',
			},
			load: {
				filter: activeId,
			},
			callbacks: {
				onMixEnd: setFirst,
			},
		},
		void 0,
		true,
	);
	setFirst();
	if ('show-card' == activeType) {
		jQuery('#map-section').hide();
		jQuery('#card-section').show();
		jQuery('.c-location-map__toggle-map').addClass(
			'c-location-map__toggle-map--hidden',
		);
	} else {
		jQuery('#card-section').hide();
		jQuery('#map-section').show();
		jQuery('.c-location-map__toggle-map').removeClass(
			'c-location-map__toggle-map--hidden',
		);
	}

	jQuery('.js-map-location-btn').click(function() {
		var type = jQuery(this).data('display');
		if ('show-card' == type) {
			jQuery('#map-section').fadeOut('fast');
			jQuery('#card-section').fadeIn('fast');
			jQuery('.c-location-map__toggle-map').addClass(
				'c-location-map__toggle-map--hidden',
			);
		} else {
			jQuery('#card-section').fadeOut('fast');
			jQuery('#map-section').fadeIn('fast');
			jQuery('.c-location-map__toggle-map').removeClass(
				'c-location-map__toggle-map--hidden',
			);
		}
	});
	function setFirst() {
		jQuery('.js-map-location-scroll .c-location-map__location').removeClass(
			'c-location-map__location--first',
		);
		jQuery('.js-map-location-scroll .c-location-map__location:visible')
			.first()
			.addClass('c-location-map__location--first');
	}
}

export default setFieldsFilter;
