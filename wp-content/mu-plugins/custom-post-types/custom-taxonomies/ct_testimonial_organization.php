<?php
/*
 * Register Taxonomy: Testimonial Organization
 * Taxonomy linked to: Testimonial
*/
function dod_register_taxonomy_testimonial_organization()
{
	$labels = ['name' => _x('Testimonial Organizations', 'taxonomy general name') , 'singular_name' => _x('Testimonial Organization', 'taxonomy singular name') , 'search_items' => __('Search Testimonial Organizations') , 'all_items' => __('All Testimonial Organizations') , 'parent_item' => __('Parent Testimonial Organization') , 'parent_item_colon' => __('Parent Testimonial Organization:') , 'edit_item' => __('Edit Testimonial Organization') , 'update_item' => __('Update Testimonial Organization') , 'add_new_item' => __('Add New Testimonial Organization') , 'new_item_name' => __('New Testimonial Organization Name') , 'menu_name' => __('Testimonial Organizations') , ];
	$args = ['hierarchical' => true, 'labels' => $labels, 'show_ui' => true, 'show_admin_column' => true, 'query_var' => true, 'rewrite' => ['slug' => 'statement-organization'], ];
	register_taxonomy('statement-organization', ['testimonial'], $args);
}
add_action('init', 'dod_register_taxonomy_testimonial_organization');
