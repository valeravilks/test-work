<?php
/*
 * Register Post Type: Icon
*/
function dod_register_icon_post_type()
{
	$labels = array(
		'name' => 'Icons',
		'singular_name' => 'Icon',
		'menu_name' => 'Icons',
		'name_admin_bar' => 'Icon',
		'archives' => 'Icon Archives',
		'parent_item_colon' => 'Parent Icon:',
		'all_items' => 'All Icons',
		'add_new_item' => 'Add New Icon',
		'add_new' => 'Add New',
		'new_item' => 'New Icon',
		'edit_item' => 'Edit Icon',
		'update_item' => 'Update Icon',
		'view_item' => 'View Icon',
		'search_items' => 'Search Icon',
		'not_found' => 'Not found',
		'not_found_in_trash' => 'Not found in Trash',
		'featured_image' => 'Featured Image',
		'set_featured_image' => 'Set Featured Image',
		'remove_featured_image' => 'Remove Featured Image',
		'use_featured_image' => 'Use as Featured Image',
		'insert_into_item' => 'Insert into icon',
		'uploaded_to_this_item' => 'Uploaded to this icon',
		'items_list' => 'Icon list',
		'items_list_navigation' => 'Icon list navigation',
		'filter_items_list' => 'Filter icon list',
	);
	$args = array(
		'label' => 'Icon',
		'description' => 'List of Icons',
		'labels' => $labels,
		'supports' => array(
			'title',
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
		'capability_type' => 'page',
	);
	register_post_type('icon', $args);
}
add_action('init', 'dod_register_icon_post_type', 0);
