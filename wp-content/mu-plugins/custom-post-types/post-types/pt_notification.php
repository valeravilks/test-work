<?php
/*
 * Register Post Type: Notification
*/
function dod_register_notification_post_type()
{
	$labels = array(
		'name' => 'Notifications',
		'singular_name' => 'Notification',
		'menu_name' => 'Notifications',
		'name_admin_bar' => 'Notification',
		'archives' => 'Notification Archives',
		'parent_item_colon' => 'Parent Notification:',
		'all_items' => 'All Notifications',
		'add_new_item' => 'Add New Notification',
		'add_new' => 'Add New',
		'new_item' => 'New Notification',
		'edit_item' => 'Edit Notification',
		'update_item' => 'Update Notification',
		'view_item' => 'View Notification',
		'search_items' => 'Search Notification',
		'not_found' => 'Not found',
		'not_found_in_trash' => 'Not found in Trash',
		'featured_image' => 'Featured Image',
		'set_featured_image' => 'Set Featured Image',
		'remove_featured_image' => 'Remove Featured Image',
		'use_featured_image' => 'Use as Featured Image',
		'insert_into_item' => 'Insert into Notification',
		'uploaded_to_this_item' => 'Uploaded to this Notification',
		'items_list' => 'Notification list',
		'items_list_navigation' => 'Notification list navigation',
		'filter_items_list' => 'Filter Notification list',
	);
	$args = array(
		'label' => 'Notification',
		'description' => 'List of Notification',
		'labels' => $labels,
		'supports' => array(
			'title',
			'editor',
			'revisions',
			'thumbnail',
			'excerpt'
		) ,
		'hierarchical' => false,
		'public' => false,
		'show_ui' => true,
		'show_in_menu' => true,
		'rewrite' => array(
			'slug' => 'notification',
			'with_front' => false
		) ,
		'menu_position' => 20,
		'menu_icon' => 'dashicons-admin-site',
		'show_in_admin_bar' => true,
		'show_in_nav_menus' => true,
		'can_export' => true,
		'has_archive' => false,
		'capability_type' => 'page',
		'taxonomies' => array(
			'category'
		)
	);
	register_post_type('notification', $args);
}
add_action('init', 'dod_register_notification_post_type', 0);
