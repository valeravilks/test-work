<?php

/**
 * Registering theme support
*/

add_action('after_setup_theme', function () {
	/**
	 * Enable features from Soil when plugin is activated
	 * @link https://roots.io/plugins/soil/
	 */
	add_theme_support('soil-clean-up');
	add_theme_support('soil-jquery-cdn');
	add_theme_support('soil-nav-walker');
	add_theme_support('soil-nice-search');
	add_theme_support('soil-relative-urls');
	/**
	 * Enable plugins to manage the document title
	 * @link https://developer.wordpress.org/reference/functions/add_theme_support/#title-tag
	 */
	add_theme_support('title-tag');
	/**
	 * Register navigation menus
	 * @link https://developer.wordpress.org/reference/functions/register_nav_menus/
	 */
	/**
	 * Register navigation menus
	 * @link https://developer.wordpress.org/reference/functions/register_nav_menus/
	 */
	register_nav_menus(
		array(
			'menu_primary' => 'Primary Menu',
			'menu_secondary' => 'Secondary Menu',
			'menu_footer_1' => 'Footer Column 1',
			'menu_footer_2' => 'Footer Column 2',
			'menu_footer_3' => 'Footer Column 3',
			'menu_mobile' => 'Mobile Menu',
			'menu_top' => 'Top Menu',
		)
	);

	/**
	/**
	 * Enable post thumbnails
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support('post-thumbnails');
	/**
	 * Enable HTML5 markup support
	 * @link https://developer.wordpress.org/reference/functions/add_theme_support/#html5
	 */
	add_theme_support('html5', ['caption', 'comment-form', 'comment-list', 'gallery', 'search-form']);
	/**
	 * Enable selective refresh for widgets in customizer
	 * @link https://developer.wordpress.org/themes/advanced-topics/customizer-api/#theme-support-in-sidebars
	 */
	// add_theme_support('customize-selective-refresh-widgets');
}, 20);
