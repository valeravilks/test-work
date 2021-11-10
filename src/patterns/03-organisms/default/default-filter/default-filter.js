let mixitup = require('mixitup');
let mixItUpMultiFilterExtension = require('../../../../js/vendors/mixitup/mixitup-multifilter.js');
let componentClass = 'o-default-filter';

export default () => {
	if ($(`.${componentClass}`)) {
		mixitup.use(mixItUpMultiFilterExtension);

		let mixer = mixitup(`.js-filter`, {
			multifilter: {
				enable: true,
			},
			animation: {
				duration: 300,
			},
			callbacks: {
				onMixStart: function() {
					$(`.${componentClass}__no-result`).removeClass(
						`${componentClass}__no-result--show`,
					);
				},
				onMixFail: function() {
					$(`.${componentClass}__no-result`).addClass(
						`${componentClass}__no-result--show`,
					);
				},
			},
		});
	}
};
