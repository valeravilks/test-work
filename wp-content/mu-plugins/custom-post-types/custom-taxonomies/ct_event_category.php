<?php
/*
 * Register Taxonomy: Event Category
 * Taxonomy linked to: Event
*/
function dod_register_event_category()
{
	// Add new taxonomy, make it hierarchical like categories
	$labels = array(
		'name' => _x('Event Category', 'taxonomy general name') ,
		'singular_name' => _x('Subject', 'taxonomy singular name') ,
		'search_items' => __('Search Subjects') ,
		'all_items' => __('All Event Categories') ,
		'parent_item' => __('Parent Event Category') ,
		'parent_item_colon' => __('Event Category:') ,
		'edit_item' => __('Edit Event Category') ,
		'update_item' => __('Update Event Category') ,
		'add_new_item' => __('Add New Event Category') ,
		'new_item_name' => __('New Event Category Name') ,
		'menu_name' => __('Event Categories') ,
	);

	// Now register the taxonomy
	register_taxonomy('event-categories', array(
		'event'
	) , array(
		'hierarchical' => true,
		'labels' => $labels,
		'show_ui' => true,
		'show_in_rest' => true,
		'show_admin_column' => true,
		'query_var' => true,
		'rewrite' => array(
			'slug' => 'event-categories'
		) ,
	));
}
add_action('init', 'dod_register_event_category', 0);
