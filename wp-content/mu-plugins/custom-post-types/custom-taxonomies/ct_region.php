<?php
/*
 * Register Taxonomy: Region
 * Taxonomy linked to: Job Post
*/
function dod_register_region_taxonomy()
{
	$labels = array(
		'name' => _x('Regions', 'taxonomy general name', 'textdomain') ,
		'singular_name' => _x('Region', 'taxonomy singular name', 'textdomain') ,
		'search_items' => __('Search Regions', 'textdomain') ,
		'all_items' => __('All Regions', 'textdomain') ,
		'parent_item' => __('Parent Region', 'textdomain') ,
		'parent_item_colon' => __('Parent Region:', 'textdomain') ,
		'edit_item' => __('Edit Region', 'textdomain') ,
		'update_item' => __('Update Region', 'textdomain') ,
		'add_new_item' => __('Add New Region', 'textdomain') ,
		'new_item_name' => __('New Region Name', 'textdomain') ,
		'menu_name' => __('Regions', 'textdomain')
	);

	$args = array(
		'hierarchical' => true,
		'labels' => $labels,
		'show_ui' => true,
		'show_admin_column' => true,
		'query_var' => true,
		'rewrite' => array(
			'slug' => 'region'
		)
	);
	register_taxonomy('region', array(
		'job'
	) , $args);
}
add_action('init', 'dod_register_region_taxonomy', 0);
