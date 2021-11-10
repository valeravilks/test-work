<?php
/*
 * Register Taxonomy: Testimonial Author
 * Taxonomy linked to: Testimonial
*/
function dod_register_taxonomy_testimonial_author()
{
	$labels = ['name' => _x('Testimonial Authors', 'taxonomy general name') , 'singular_name' => _x('Testimonial Author', 'taxonomy singular name') , 'search_items' => __('Search Testimonial Authors') , 'all_items' => __('All Testimonial Authors') , 'parent_item' => __('Parent Testimonial Author') , 'parent_item_colon' => __('Parent Testimonial Author:') , 'edit_item' => __('Edit Testimonial Author') , 'update_item' => __('Update Testimonial Author') , 'add_new_item' => __('Add New Testimonial Author') , 'new_item_name' => __('New Testimonial Author Name') , 'menu_name' => __('Testimonial Authors') , ];
	$args = ['hierarchical' => true, 'labels' => $labels, 'show_ui' => true, 'show_admin_column' => true, 'query_var' => true, 'rewrite' => ['slug' => 'statement-author'], ];
	register_taxonomy('statement-author', ['testimonial'], $args);
}
add_action('init', 'dod_register_taxonomy_testimonial_author');
