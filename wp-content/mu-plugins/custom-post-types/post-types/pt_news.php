<?php
/*
 * Register Post Type: News
 * Linked to custom taxonomy: News Category
*/
function dod_register_news_post_type()
{
	$labels = array(
		'name' => 'News',
		'singular_name' => 'News',
		'menu_name' => 'News',
		'name_admin_bar' => 'News',
		'archives' => 'News Archives',
		'parent_item_colon' => 'Parent News:',
		'all_items' => 'All News',
		'add_new_item' => 'Add New News',
		'add_new' => 'Add New',
		'new_item' => 'New News',
		'edit_item' => 'Edit News',
		'update_item' => 'Update News',
		'view_item' => 'View News',
		'search_items' => 'Search News',
		'not_found' => 'Not found',
		'not_found_in_trash' => 'Not found in Trash',
		'featured_image' => 'Featured Image',
		'set_featured_image' => 'Set Featured Image',
		'remove_featured_image' => 'Remove Featured Image',
		'use_featured_image' => 'Use as Featured Image',
		'insert_into_item' => 'Insert into News',
		'uploaded_to_this_item' => 'Uploaded to this News',
		'items_list' => 'News list',
		'items_list_navigation' => 'News list navigation',
		'filter_items_list' => 'Filter News list',
	);
	$args = array(
		'label' => 'News',
		'description' => 'List of News',
		'labels' => $labels,
		'supports' => array(
			'title',
			'editor',
			'revisions',
			'thumbnail',
			'excerpt'
		) ,
		'hierarchical' => false,
		'public' => true,
		'rewrite' => array(
			'slug' => 'news',
			'with_front' => false
		) ,
		'menu_position' => 20,
		'menu_icon' => 'dashicons-media-text',
		'can_export' => true,
		'has_archive' => false
	);
	register_post_type('news', $args);
}
add_action('init', 'dod_register_news_post_type', 0);
