/* eslint-disable */

/*
 * Search Toggle
 *
 * runs the functionality of clicking a search icon and a search bar appears
 */

function searchBar() {
	// Search Toggle
	$('.js-header-search-toggle').on('click', function() {
		$('.m-search-bar').toggleClass('m-search-bar--active');
		$('body').toggleClass('h-scroll-lock');

		if ($('.algolia-autocomplete').css('display') == 'block') {
			$('.algolia-autocomplete').css('display', 'none');
		}

		if ($('.m-search-bar').hasClass('m-search-bar--active')) {
			setTimeout(function() {
				$('.m-search-bar__search-field').focus();
			}, 600);
		}
	});

	$('.js-header-search-toggle-mobile').on('click', function() {
		$('.js-slide-out-search-wrapper-mob').toggleClass(
			'c-slide-out__search-wrapper--active',
		);
		setTimeout(function() {
			$('.js-search-field-mob').focus();
		}, 600);
	});

	//don't allow enter key
	$('.m-search-bar__search-field, .js-search-field-mob').keypress(function(
		e,
	) {
		if (e.which === 13) {
			e.preventDefault();
		}
	});
}

export default searchBar;
