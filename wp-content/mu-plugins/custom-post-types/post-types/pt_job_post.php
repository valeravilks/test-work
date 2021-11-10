<?php
/*
 * Register Post Type: Job Post
 * Linked to custom taxonomies: Department, Region
*/
function dod_register_job_post_type()
{
	$labels = array(
		'name' => 'Job Listings',
		'singular_name' => 'Job Listing',
		'menu_name' => 'Job Listings',
		'name_admin_bar' => 'Job Listing',
		'archives' => 'Job Archives',
		'parent_item_colon' => 'Parent Job:',
		'all_items' => 'All Job Listings',
		'add_new_item' => 'Add New Job Listing',
		'add_new' => 'Add New',
		'new_item' => 'New Job Listing',
		'edit_item' => 'Edit Job Listing',
		'update_item' => 'Update Job Listing',
		'view_item' => 'View Job Listing',
		'search_items' => 'Search Job Listing',
		'not_found' => 'Not found',
		'not_found_in_trash' => 'Not found in Trash',
		'featured_image' => 'Featured Image',
		'set_featured_image' => 'Set Featured Image',
		'remove_featured_image' => 'Remove Featured Image',
		'use_featured_image' => 'Use as Featured Image',
		'insert_into_item' => 'Insert into job',
		'uploaded_to_this_item' => 'Uploaded to this job',
		'items_list' => 'Job list',
		'items_list_navigation' => 'Job list navigation',
		'filter_items_list' => 'Filter Job list'
	);
	$args = array(
		'label' => 'Job Listing',
		'description' => 'List of Job Listings',
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
			'slug' => 'job',
			'with_front' => false
		) ,
		'menu_position' => 20,
		'menu_icon' => 'dashicons-portfolio',
		'show_in_admin_bar' => true,
		'show_in_nav_menus' => true,
		'can_export' => true,
		'has_archive' => false,
		'capability_type' => 'page'
	);
	register_post_type('job', $args);
}
add_action('init', 'dod_register_job_post_type', 0);
