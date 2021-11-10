<?php
/*
 * Register Post Type: Resource
 * Linked to custom taxonomy:  Resource Category
*/
function dod_register_resource_post_type()
{
	$labels = array(
		'name' => 'Resources',
		'singular_name' => 'Resource',
		'menu_name' => 'Resources',
		'name_admin_bar' => 'Resource',
		'archives' => 'Resource Archives',
		'parent_item_colon' => 'Parent Resource:',
		'all_items' => 'All Resources',
		'add_new_item' => 'Add New Resource',
		'add_new' => 'Add New',
		'new_item' => 'New Resource',
		'edit_item' => 'Edit Resource',
		'update_item' => 'Update Resource',
		'view_item' => 'View Resource',
		'search_items' => 'Search Resource',
		'not_found' => 'Not found',
		'not_found_in_trash' => 'Not found in Trash',
		'featured_image' => 'Featured Image',
		'set_featured_image' => 'Set Featured Image',
		'remove_featured_image' => 'Remove Featured Image',
		'use_featured_image' => 'Use as Featured Image',
		'insert_into_item' => 'Insert into Resource',
		'uploaded_to_this_item' => 'Uploaded to this Resource',
		'items_list' => 'Resource list',
		'items_list_navigation' => 'Resource list navigation',
		'filter_items_list' => 'Filter Resource list',
	);
	$args = array(
		'label' => 'Resource',
		'description' => 'List of Resources',
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
			'slug' => 'resource',
			'with_front' => false
		) ,
		'menu_position' => 20,
		'menu_icon' => 'dashicons-playlist-video',
		'show_in_admin_bar' => true,
		'show_in_nav_menus' => true,
		'can_export' => true,
		'has_archive' => false,
		'capability_type' => 'page'
	);
	register_post_type('resource', $args);
}
add_action('init', 'dod_register_resource_post_type', 0);
