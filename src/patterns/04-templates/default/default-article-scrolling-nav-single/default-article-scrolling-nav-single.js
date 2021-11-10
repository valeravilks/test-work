function defaultArticleSideNavigation() {
	// Add menu heading specific ids using indexes.
	$('.c-single-blog-sidenav__content h2').each((index, elm) => {
		if ($(elm).text()) {
			$(elm).attr('id', index);
		}
	});

	$('.c-single-blog-sidenav__menu-link').click(function(e) {
		let currentHeadingsMenuItemHref = $(this).attr('href'),
			fromTopHeight = 70;

		let headingsMenuItemOffsetTop =
			currentHeadingsMenuItemHref === '#'
				? 0
				: $(currentHeadingsMenuItemHref).offset().top - fromTopHeight;

		$('html, body')
			.stop()
			.animate(
				{
					scrollTop: headingsMenuItemOffsetTop,
				},
				600,
			);

		e.preventDefault();
	});
}

export default defaultArticleSideNavigation;
