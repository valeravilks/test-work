<?php
/*
 * Register Post Type: Testimonial
 * Linked to custom taxonomies: Testimonial Position, Testimonial Organization, Testimonial Author
*/

function dod_register_testimonial_post_type()
{
	$labels = array(
		'name' => 'Testimonials',
		'singular_name' => 'Testimonial',
		'menu_name' => 'Testimonials',
		'name_admin_bar' => 'Testimonial',
		'archives' => 'Testimonial Archives',
		'parent_item_colon' => 'Parent Testimonial:',
		'all_items' => 'All Testimonials',
		'add_new_item' => 'Add New Testimonial',
		'add_new' => 'Add New',
		'new_item' => 'New Testimonial',
		'edit_item' => 'Edit Testimonial',
		'update_item' => 'Update Testimonial',
		'view_item' => 'View Testimonial',
		'search_items' => 'Search Testimonial',
		'not_found' => 'Not found',
		'not_found_in_trash' => 'Not found in Trash',
		'featured_image' => 'Featured Image',
		'set_featured_image' => 'Set Featured Image',
		'remove_featured_image' => 'Remove Featured Image',
		'use_featured_image' => 'Use as Featured Image',
		'insert_into_item' => 'Insert into Testimonial',
		'uploaded_to_this_item' => 'Uploaded to this Testimonial',
		'items_list' => 'Testimonial list',
		'items_list_navigation' => 'Testimonial list navigation',
		'filter_items_list' => 'Filter Testimonial list',
	);
	$args = array(
		'label' => 'Testimonial',
		'description' => 'List of Testimonial',
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
			'slug' => 'testimonial',
			'with_front' => false
		) ,
		'menu_position' => 20,
		'menu_icon' => 'dashicons-testimonial',
		'show_in_admin_bar' => true,
		'show_in_nav_menus' => true,
		'can_export' => true,
		'has_archive' => false,
		'capability_type' => 'post',
	);
	register_post_type('testimonial', $args);
}
add_action('init', 'dod_register_testimonial_post_type', 0);
