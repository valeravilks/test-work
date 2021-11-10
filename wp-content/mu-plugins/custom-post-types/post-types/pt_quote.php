<?php
/*
 * Register Post Type: Quote
*/
function dod_register_quote_post_type()
{
	$labels = array(
		'name' => 'Quotes',
		'singular_name' => 'Quote',
		'menu_name' => 'Quotes',
		'name_admin_bar' => 'Quote',
		'archives' => 'Quote Archives',
		'parent_item_colon' => 'Parent Quote:',
		'all_items' => 'All Quotes',
		'add_new_item' => 'Add New Quote',
		'add_new' => 'Add New',
		'new_item' => 'New Quote',
		'edit_item' => 'Edit Quote',
		'update_item' => 'Update Quote',
		'view_item' => 'View Quote',
		'search_items' => 'Search Quote',
		'not_found' => 'Not found',
		'not_found_in_trash' => 'Not found in Trash',
		'featured_image' => 'Featured Image',
		'set_featured_image' => 'Set Featured Image',
		'remove_featured_image' => 'Remove Featured Image',
		'use_featured_image' => 'Use as Featured Image',
		'insert_into_item' => 'Insert into Quote',
		'uploaded_to_this_item' => 'Uploaded to this Quote',
		'items_list' => 'Quote list',
		'items_list_navigation' => 'Quote list navigation',
		'filter_items_list' => 'Filter Quote list',
	);
	$args = array(
		'label' => 'Quote',
		'description' => 'List of Quote',
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
			'slug' => 'quote',
			'with_front' => false
		) ,
		'menu_position' => 20,
		'menu_icon' => 'dashicons-format-quote',
		'show_in_admin_bar' => true,
		'show_in_nav_menus' => true,
		'can_export' => true,
		'has_archive' => false,
		'capability_type' => 'page',
		'taxonomies' => array(
			'category'
		)
	);
	register_post_type('quote', $args);
}
add_action('init', 'dod_register_quote_post_type', 0);
