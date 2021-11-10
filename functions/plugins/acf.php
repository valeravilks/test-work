<?php

/**
 * Functions related to ACF
*/


// Add CSS to ACF admin
function my_acf_admin_enqueue_scripts() {
	// register style
	wp_register_style( 'my-acf-input-css', get_stylesheet_directory_uri() . '/src/static/css/acf-extra.css', false, '1.0.0' );
	wp_enqueue_style( 'my-acf-input-css' );
}
add_action( 'acf/input/admin_enqueue_scripts', 'my_acf_admin_enqueue_scripts' );

/**
 * Get google map api key from options and set for acf goggle map
 */
function my_acf_init() {
	$map_apikey = get_field('google_map_api_key', 'option');
	acf_update_setting('google_api_key', $map_apikey);
}
add_action('acf/init', 'my_acf_init');


// https://www.advancedcustomfields.com/resources/acf-fields-flexible_content-layout_title/
function my_acf_flexible_content_layout_title( $title, $field, $layout, $i ) {
  // // remove layout title from text
  // $title = '';
  // load text sub field
  if( $text = get_sub_field('block_title') ) {
    $title .= '<h4 style="display:inline">&nbsp;:&nbsp;' . $text . '</h4>';
  }
  // return
  return $title;
}
add_filter('acf/fields/flexible_content/layout_title/name=block', 'my_acf_flexible_content_layout_title', 10, 4);

/**
 * Change Flexible Content Preview for Advanced Custom Fields plugin layout default images path.
 */
function my_acf_get_custom_layout_img_path() {
  return '/src/static/images/acf-flexible-content-preview-plugin';
}

add_filter( 'acf-flexible-content-preview.images_path', 'my_acf_get_custom_layout_img_path' );
