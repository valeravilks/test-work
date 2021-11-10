<?php
/*
 * Register Taxonomy: Resource Category
 * Taxonomy linked to: Resource
*/
function dod_register_resource_category_taxonomy()
{
	$labels = array(
		'name' => _x('Resource Category', 'taxonomy general name', 'textdomain') ,
		'singular_name' => _x('Resource Category', 'taxonomy singular name', 'textdomain') ,
		'search_items' => __('Search Resource Categories', 'textdomain') ,
		'all_items' => __('All Resource Categories', 'textdomain') ,
		'parent_item' => __('Parent Resource Category', 'textdomain') ,
		'parent_item_colon' => __('Parent Resource Category:', 'textdomain') ,
		'edit_item' => __('Edit Resource Category', 'textdomain') ,
		'update_item' => __('Update Resource Category', 'textdomain') ,
		'add_new_item' => __('Add New Resource Category', 'textdomain') ,
		'new_item_name' => __('New Resource Category Name', 'textdomain') ,
		'menu_name' => __('Resource Categories', 'textdomain')
	);

	$args = array(
		'hierarchical' => true,
		'labels' => $labels,
		'show_ui' => true,
		'show_admin_column' => true,
		'query_var' => true,
		'rewrite' => array(
			'slug' => 'resource-category'
		)
	);
	register_taxonomy('resource-category', array(
		'resource'
	) , $args);
}
add_action('init', 'dod_register_resource_category_taxonomy', 0);
