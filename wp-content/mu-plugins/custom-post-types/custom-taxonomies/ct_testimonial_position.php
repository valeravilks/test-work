<?php
/*
 * Register Taxonomy: Testimonial Position
 * Taxonomy linked to: Testimonial
*/
function dod_register_taxonomy_testimonial_position()
{
	$labels = ['name' => _x('Testimonial Positions', 'taxonomy general name') , 'singular_name' => _x('Testimonial Position', 'taxonomy singular name') , 'search_items' => __('Search Testimonial Positions') , 'all_items' => __('All Testimonial Positions') , 'parent_item' => __('Parent Testimonial Position') , 'parent_item_colon' => __('Parent Testimonial Position:') , 'edit_item' => __('Edit Testimonial Position') , 'update_item' => __('Update Testimonial Position') , 'add_new_item' => __('Add New Testimonial Position') , 'new_item_name' => __('New Testimonial Position Name') , 'menu_name' => __('Testimonial Positions') , ];
	$args = ['hierarchical' => true, 'labels' => $labels, 'show_ui' => true, 'show_admin_column' => true, 'query_var' => true, 'rewrite' => ['slug' => 'statement-position'], ];
	register_taxonomy('statement-position', ['testimonial'], $args);
}
add_action('init', 'dod_register_taxonomy_testimonial_position');
