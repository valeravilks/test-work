<?php
/*
 * Register Taxonomy: Department
 * Taxonomy linked to: Job Post
*/
function dod_register_department_taxonomy()
{
	$labels = array(
		'name' => _x('Departments', 'taxonomy general name', 'textdomain') ,
		'singular_name' => _x('Department', 'taxonomy singular name', 'textdomain') ,
		'search_items' => __('Search Departments', 'textdomain') ,
		'all_items' => __('All Departments', 'textdomain') ,
		'parent_item' => __('Parent Department', 'textdomain') ,
		'parent_item_colon' => __('Parent Department:', 'textdomain') ,
		'edit_item' => __('Edit Department', 'textdomain') ,
		'update_item' => __('Update Department', 'textdomain') ,
		'add_new_item' => __('Add New Department', 'textdomain') ,
		'new_item_name' => __('New Department Name', 'textdomain') ,
		'menu_name' => __('Departments', 'textdomain')
	);

	$args = array(
		'hierarchical' => true,
		'labels' => $labels,
		'show_ui' => true,
		'show_admin_column' => true,
		'query_var' => true,
		'rewrite' => array(
			'slug' => 'department'
		)
	);
	register_taxonomy('department', array(
		'job'
	) , $args);
}
add_action('init', 'dod_register_department_taxonomy', 0);
