<?php
/*
 * Register Post Type: Location
*/
function dod_register_location_post_type()
{
	$labels = array(
		'name' => 'Locations',
		'singular_name' => 'Location',
		'menu_name' => 'Locations',
		'name_admin_bar' => 'Location',
		'archives' => 'Location Archives',
		'parent_item_colon' => 'Parent Location:',
		'all_items' => 'All Locations',
		'add_new_item' => 'Add New Location',
		'add_new' => 'Add New',
		'new_item' => 'New Location',
		'edit_item' => 'Edit Location',
		'update_item' => 'Update Location',
		'view_item' => 'View Location',
		'search_items' => 'Search Location',
		'not_found' => 'Not found',
		'not_found_in_trash' => 'Not found in Trash',
		'featured_image' => 'Featured Image',
		'set_featured_image' => 'Set Featured Image',
		'remove_featured_image' => 'Remove Featured Image',
		'use_featured_image' => 'Use as Featured Image',
		'insert_into_item' => 'Insert into location',
		'uploaded_to_this_item' => 'Uploaded to this location',
		'items_list' => 'Location list',
		'items_list_navigation' => 'Location list navigation',
		'filter_items_list' => 'Filter location list'
	);
	$args = array(
		'label' => 'Location',
		'description' => 'List of Locations',
		'labels' => $labels,
		'supports' => array(
			'title',
			'editor',
			'revisions',
			'thumbnail'
		) ,
		'hierarchical' => false,
		'public' => false,
		'show_ui' => true,
		'show_in_menu' => true,
		'menu_position' => 20,
		'menu_icon' => 'dashicons-location',
		'show_in_admin_bar' => true,
		'show_in_nav_menus' => true,
		'can_export' => true,
		'show_in_rest' => true,
		'has_archive' => false,
		'capability_type' => 'page'
	);
	register_post_type('location', $args);
}
add_action('init', 'dod_register_location_post_type', 0);
