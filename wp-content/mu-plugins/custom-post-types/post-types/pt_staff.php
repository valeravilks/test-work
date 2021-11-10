<?php
/*
 * Register Post Type: Staff
 * Linked to custom taxonomy: Organization Position
*/
function dod_register_staff_post_type()
{
	$labels = array(
		'name' => 'Staff Members',
		'singular_name' => 'Staff',
		'menu_name' => 'Staff Members',
		'name_admin_bar' => 'Staff',
		'archives' => 'Staff Archives',
		'parent_item_colon' => 'Parent Staff:',
		'all_items' => 'All Staff Members',
		'add_new_item' => 'Add New Staff',
		'add_new' => 'Add New',
		'new_item' => 'New Staff',
		'edit_item' => 'Edit Staff',
		'update_item' => 'Update Staff',
		'view_item' => 'View Staff',
		'search_items' => 'Search Staff',
		'not_found' => 'Not found',
		'not_found_in_trash' => 'Not found in Trash',
		'featured_image' => 'Headshot',
		'set_featured_image' => 'Set Headshot',
		'remove_featured_image' => 'Remove Headshot',
		'use_featured_image' => 'Use as Headshot',
		'insert_into_item' => 'Insert into Staff',
		'uploaded_to_this_item' => 'Uploaded to this Staff',
		'items_list' => 'Staff list',
		'items_list_navigation' => 'Staff list navigation',
		'filter_items_list' => 'Filter Staff list',
	);
	$args = array(
		'label' => 'Staff',
		'description' => 'List of Staff',
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
		'rewrite' => array(
			'slug' => 'staff',
			'with_front' => false
		) ,
		'menu_position' => 20,
		'menu_icon' => 'dashicons-groups',
		'show_in_admin_bar' => true,
		'show_in_nav_menus' => true,
		'can_export' => true,
		'has_archive' => false,
		'capability_type' => 'post',
	);
	register_post_type('staff', $args);
}
add_action('init', 'dod_register_staff_post_type', 0);
