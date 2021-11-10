<?php

/**
 * Registering scripts and styles
*/


add_action('wp_enqueue_scripts', function () {
	$manifest = json_decode(file_get_contents(get_template_directory_uri() . '/build/assets.json', true));
	$main = $manifest->main;

	wp_enqueue_style('lightgallery-css', get_template_directory_uri() . "/src/static/vendors/lightgallery/dist/css/lightgallery.min.css",  false, null);
	wp_enqueue_style('theme-css', get_template_directory_uri() . "/build/" . $main->css,  false, null);

	wp_enqueue_script('lightgallery-js', get_template_directory_uri() . "/src/static/vendors/lightgallery/dist/js/lightgallery-all.min.js" ,  false, null, true);
	wp_enqueue_script('theme-js', get_template_directory_uri() . "/build/" . $main->js, ['jquery'], null, true);

    // For ajax calls
    wp_localize_script( 'theme-js', 'ajax_object', array( 'ajax_url' => admin_url( 'admin-ajax.php' ) ) );
}, 100);
