<?php
/*
 * Register Taxonomy: Whitepaper Category
 * Taxonomy linked to: Whitepaper
*/
function dod_register_whitepapers_category()
{
	// Add new taxonomy, make it hierarchical like categories
	$labels = array(
		'name' => _x('Whitepaper Category', 'taxonomy general name') ,
		'singular_name' => _x('Subject', 'taxonomy singular name') ,
		'search_items' => __('Search Subjects') ,
		'all_items' => __('All Whitepaper Categories') ,
		'parent_item' => __('Parent Whitepaper Category') ,
		'parent_item_colon' => __('Whitepaper Category:') ,
		'edit_item' => __('Edit Whitepaper Category') ,
		'update_item' => __('Update Whitepaper Category') ,
		'add_new_item' => __('Add New Whitepaper Category') ,
		'new_item_name' => __('New Whitepaper Category Name') ,
		'menu_name' => __('Whitepaper Categories') ,
	);

	// Now register the taxonomy
	register_taxonomy('whitepaper-categories', array(
		'whitepaper'
	) , array(
		'hierarchical' => true,
		'labels' => $labels,
		'show_ui' => true,
		'show_in_rest' => true,
		'show_admin_column' => true,
		'query_var' => true,
		'rewrite' => array(
			'slug' => 'whitepaper-categories'
		) ,
	));
}
add_action('init', 'dod_register_whitepapers_category', 0);
