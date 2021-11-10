<?php
/*
 * Register Post Type: CTA (Call to Action)
*/
function dod_register_cta_post_type()
{
	$labels = array(
		'name' => 'Call to Actions',
		'singular_name' => 'Call to Action',
		'menu_name' => 'Call to Actions',
		'name_admin_bar' => 'Call to Action',
		'archives' => 'Call to Action Archives',
		'parent_item_colon' => 'Parent Call to Action:',
		'all_items' => 'All Call to Actions',
		'add_new_item' => 'Add New Call to Action',
		'add_new' => 'Add New',
		'new_item' => 'New Call to Action',
		'edit_item' => 'Edit Call to Action',
		'update_item' => 'Update Call to Action',
		'view_item' => 'View Call to Action',
		'search_items' => 'Search Call to Action',
		'not_found' => 'Not found',
		'not_found_in_trash' => 'Not found in Trash',
		'featured_image' => 'Featured Image',
		'set_featured_image' => 'Set Featured Image',
		'remove_featured_image' => 'Remove Featured Image',
		'use_featured_image' => 'Use as Featured Image',
		'insert_into_item' => 'Insert into Call to Action',
		'uploaded_to_this_item' => 'Uploaded to this Call to Action',
		'items_list' => 'Call to Action list',
		'items_list_navigation' => 'Call to Action list navigation',
		'filter_items_list' => 'Filter Call to Action list',
	);
	$args = array(
		'label' => 'Call to Action',
		'description' => 'List of Call to Actions',
		'labels' => $labels,
		'supports' => array(
			'title',
		) ,
		'hierarchical' => false,
		'public' => false,
		'show_ui' => true,
		'show_in_menu' => true,
		'menu_position' => 20,
		'menu_icon' => 'dashicons-phone',
		'show_in_admin_bar' => true,
		'show_in_nav_menus' => true,
		'can_export' => true,
		'has_archive' => false,
		'capability_type' => 'page',
	);
	register_post_type('cta-full', $args);
}
add_action('init', 'dod_register_cta_post_type', 0);
