<?php
/*
 * Register Post Type: Media Coverage
 * Linked to custom taxonomy: Media Coverage Category
*/
function dod_register_media_coverage_post_type()
{
	$labels = array(
		'name' => 'Media Coverages',
		'singular_name' => 'Media Coverage',
		'menu_name' => 'Media Coverages',
		'name_admin_bar' => 'Media Coverage',
		'archives' => 'Media Coverage Archives',
		'parent_item_colon' => 'Parent Media Coverage:',
		'all_items' => 'All Media Coverages',
		'add_new_item' => 'Add New Media Coverage',
		'add_new' => 'Add New',
		'new_item' => 'New Media Coverage',
		'edit_item' => 'Edit Media Coverage',
		'update_item' => 'Update Media Coverage',
		'view_item' => 'View Media Coverage',
		'search_items' => 'Search Media Coverage',
		'not_found' => 'Not found',
		'not_found_in_trash' => 'Not found in Trash',
		'featured_image' => 'Featured Image',
		'set_featured_image' => 'Set Featured Image',
		'remove_featured_image' => 'Remove Featured Image',
		'use_featured_image' => 'Use as Featured Image',
		'insert_into_item' => 'Insert into Media Coverage',
		'uploaded_to_this_item' => 'Uploaded to this Media Coverage',
		'items_list' => 'Media Coverage list',
		'items_list_navigation' => 'Media Coverage list navigation',
		'filter_items_list' => 'Filter Media Coverage list',
	);
	$args = array(
		'label' => 'Media Coverage',
		'description' => 'List of Media Coverages',
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
			'slug' => 'media-coverage',
			'with_front' => false
		) ,
		'menu_position' => 20,
		'menu_icon' => 'dashicons-admin-media',
		'show_in_admin_bar' => true,
		'show_in_nav_menus' => true,
		'can_export' => true,
		'has_archive' => false,
		'capability_type' => 'page'
	);
	register_post_type('media-coverage', $args);
}
add_action('init', 'dod_register_media_coverage_post_type', 0);
