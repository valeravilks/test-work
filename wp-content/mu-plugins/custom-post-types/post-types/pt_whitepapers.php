<?php
/*
 * Register Post Type: Whitepaper
 * Linked to custom taxonomy:  Whitepaper Category
*/
function dod_register_whitepapers_post_type()
{
	$labels = array(
		'name' => 'Whitepapers',
		'singular_name' => 'Whitepaper',
		'menu_name' => 'Whitepapers',
		'name_admin_bar' => 'Whitepaper',
		'archives' => 'Whitepaper Archives',
		'parent_item_colon' => 'Parent Whitepaper:',
		'all_items' => 'All Whitepapers',
		'add_new_item' => 'Add New Whitepaper',
		'add_new' => 'Add New',
		'new_item' => 'New Whitepaper',
		'edit_item' => 'Edit Whitepaper',
		'update_item' => 'Update Whitepaper',
		'view_item' => 'View Whitepaper',
		'search_items' => 'Search Whitepaper',
		'not_found' => 'Not found',
		'not_found_in_trash' => 'Not found in Trash',
		'featured_image' => 'Featured Image',
		'set_featured_image' => 'Set Featured Image',
		'remove_featured_image' => 'Remove Featured Image',
		'use_featured_image' => 'Use as Featured Image',
		'insert_into_item' => 'Insert into Whitepaper',
		'uploaded_to_this_item' => 'Uploaded to this Whitepaper',
		'items_list' => 'Whitepaper list',
		'items_list_navigation' => 'Whitepaper list navigation',
		'filter_items_list' => 'Filter Whitepaper list',
	);
	$args = array(
		'label' => 'Whitepaper',
		'description' => 'List of Whitepapers',
		'labels' => $labels,
		'supports' => array(
			'title',
			'editor',
			'revisions',
			'thumbnail',
			'excerpt'
		) ,
		'hierarchical' => true,
		'public' => true,
		'rewrite' => array(
			'slug' => 'whitepapers',
			'with_front' => true
		) ,
		'menu_position' => 20,
		'menu_icon' => 'dashicons-format-aside',
		'can_export' => true,
		'has_archive' => true,
		'capability_type' => 'post',
		'taxonomies' => array(
			'whitepaper_category'
		)
	);
	register_post_type('whitepaper', $args);
}
add_action('init', 'dod_register_whitepapers_post_type', 0);
