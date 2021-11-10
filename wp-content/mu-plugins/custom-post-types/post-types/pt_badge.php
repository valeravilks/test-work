<?php
/*
 * Register Post Type: Badge
*/
function dod_register_badge_post_type()
{
	$labels = array(
		'name' => 'Badges',
		'singular_name' => 'Badge',
		'menu_name' => 'Badges',
		'name_admin_bar' => 'Badge',
		'archives' => 'Badge Archives',
		'parent_item_colon' => 'Parent Badge:',
		'all_items' => 'All Badges',
		'add_new_item' => 'Add New Badge',
		'add_new' => 'Add New',
		'new_item' => 'New Badge',
		'edit_item' => 'Edit Badge',
		'update_item' => 'Update Badge',
		'view_item' => 'View Badge',
		'search_items' => 'Search Badge',
		'not_found' => 'Not found',
		'not_found_in_trash' => 'Not found in Trash',
		'featured_image' => 'Featured Image',
		'set_featured_image' => 'Set Featured Image',
		'remove_featured_image' => 'Remove Featured Image',
		'use_featured_image' => 'Use as Featured Image',
		'insert_into_item' => 'Insert into badge',
		'uploaded_to_this_item' => 'Uploaded to this badge',
		'items_list' => 'Badge list',
		'items_list_navigation' => 'Badge list navigation',
		'filter_items_list' => 'Filter badge list'
	);
	$args = array(
		'label' => 'Badge',
		'description' => 'List of Badges',
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
		'menu_icon' => 'dashicons-shield-alt',
		'show_in_admin_bar' => true,
		'show_in_nav_menus' => true,
		'can_export' => true,
		'has_archive' => false,
		'capability_type' => 'page'
	);
	register_post_type('badge', $args);
}
add_action('init', 'dod_register_badge_post_type', 0);
