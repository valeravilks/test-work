<?php
/*
 * Register Post Type: Banner
*/
function dod_register_banner_post_type()
{
	$labels = array(
		'name' => 'Banners',
		'singular_name' => 'Banner',
		'menu_name' => 'Banners',
		'name_admin_bar' => 'Banner',
		'archives' => 'Banner Archives',
		'parent_item_colon' => 'Parent Banner:',
		'all_items' => 'All Banners',
		'add_new_item' => 'Add New Banner',
		'add_new' => 'Add New',
		'new_item' => 'New Banner',
		'edit_item' => 'Edit Banner',
		'update_item' => 'Update Banner',
		'view_item' => 'View Banner',
		'search_items' => 'Search Banner',
		'not_found' => 'Not found',
		'not_found_in_trash' => 'Not found in Trash',
		'featured_image' => 'Featured Image',
		'set_featured_image' => 'Set Featured Image',
		'remove_featured_image' => 'Remove Featured Image',
		'use_featured_image' => 'Use as Featured Image',
		'insert_into_item' => 'Insert into Banner',
		'uploaded_to_this_item' => 'Uploaded to this Banner',
		'items_list' => 'Banner list',
		'items_list_navigation' => 'Banner list navigation',
		'filter_items_list' => 'Filter Banner list',
	);
	$args = array(
		'label' => 'Banner',
		'description' => 'List of Banners',
		'labels' => $labels,
		'supports' => array(
			'title',
		) ,
		'hierarchical' => false,
		'public' => false,
		'show_ui' => true,
		'show_in_menu' => true,
		'menu_position' => 21,
		'menu_icon' => 'dashicons-flag',
		'show_in_admin_bar' => true,
		'show_in_nav_menus' => true,
		'can_export' => true,
		'has_archive' => false,
		'capability_type' => 'page',
	);

	register_post_type('banner', $args);
}
add_action('init', 'dod_register_banner_post_type', 0);
