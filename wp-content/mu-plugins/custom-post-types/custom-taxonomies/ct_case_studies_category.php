<?php
/*
 * Register Taxonomy: Case Study Category
 * Taxonomy linked to: Case Study
*/
function dod_register_cs_category()
{
	// Add new taxonomy, make it hierarchical like categories
	$labels = array(
		'name' => _x('Case Study Category', 'taxonomy general name') ,
		'singular_name' => _x('Subject', 'taxonomy singular name') ,
		'search_items' => __('Search Subjects') ,
		'all_items' => __('All Case Study Categories') ,
		'parent_item' => __('Parent Case Study Category') ,
		'parent_item_colon' => __('Case Study Category:') ,
		'edit_item' => __('Edit Case Study Category') ,
		'update_item' => __('Update Case Study Category') ,
		'add_new_item' => __('Add New Case Study Category') ,
		'new_item_name' => __('New Case Study Category Name') ,
		'menu_name' => __('Case Study Categories') ,
	);

	// Now register the taxonomy
	register_taxonomy('case-studies-categories', array(
		'case-studies'
	) , array(
		'hierarchical' => true,
		'labels' => $labels,
		'show_ui' => true,
		'show_in_rest' => true,
		'show_admin_column' => true,
		'query_var' => true,
		'rewrite' => array(
			'slug' => 'case-studies-categories'
		) ,
	));
}
add_action('init', 'dod_register_cs_category', 0);
