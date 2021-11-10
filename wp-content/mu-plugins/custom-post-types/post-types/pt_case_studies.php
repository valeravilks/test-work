<?php
/*
 * Register Post Type: Case Study
 * Linked to custom taxonomy: Case Study Category
*/
function dod_register_case_studies_post_type()
{
	$labels = array(
		'name' => 'Case Studies',
		'singular_name' => 'Case Study',
		'menu_name' => 'Case Studies',
		'name_admin_bar' => 'Case Study',
		'archives' => 'Case Study Archives',
		'parent_item_colon' => 'Parent Case Study:',
		'all_items' => 'All Case Studies',
		'add_new_item' => 'Add New Case Study',
		'add_new' => 'Add New',
		'new_item' => 'New Case Study',
		'edit_item' => 'Edit Case Study',
		'update_item' => 'Update Case Study',
		'view_item' => 'View Case Study',
		'search_items' => 'Search Case Study',
		'not_found' => 'Not found',
		'not_found_in_trash' => 'Not found in Trash',
		'featured_image' => 'Featured Image',
		'set_featured_image' => 'Set Featured Image',
		'remove_featured_image' => 'Remove Featured Image',
		'use_featured_image' => 'Use as Featured Image',
		'insert_into_item' => 'Insert into Case Study',
		'uploaded_to_this_item' => 'Uploaded to this Case Study',
		'items_list' => 'Case Study list',
		'items_list_navigation' => 'Case Study list navigation',
		'filter_items_list' => 'Filter Case Study list',
	);
	$args = array(
		'label' => 'Case Study',
		'description' => 'List of Case Study',
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
		'rewrite' => array(
			'slug' => 'case-studies',
			'with_front' => false
		) ,
		'menu_position' => 20,
		'menu_icon' => 'dashicons-analytics',
		'can_export' => true,
		'has_archive' => false,
		'capability_type' => 'post',
		'taxonomies' => array(
			'case-studies-categories'
		)
	);
	register_post_type('case-study', $args);
}
add_action('init', 'dod_register_case_studies_post_type', 0);
