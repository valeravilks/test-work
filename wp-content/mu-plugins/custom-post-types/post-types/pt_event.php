<?php
/*
 * Register Post Type: Event
 * Linked to custom taxonomy: Event Category
*/
function dod_register_event_post_type()
{
	$labels = array(
		'name' => 'Events',
		'singular_name' => 'Event',
		'menu_name' => 'Events',
		'name_admin_bar' => 'Event',
		'archives' => 'Event Archives',
		'parent_item_colon' => 'Parent Event:',
		'all_items' => 'All Events',
		'add_new_item' => 'Add New Event',
		'add_new' => 'Add New',
		'new_item' => 'New Event',
		'edit_item' => 'Edit Event',
		'update_item' => 'Update Event',
		'view_item' => 'View Event',
		'search_items' => 'Search Event',
		'not_found' => 'Not found',
		'not_found_in_trash' => 'Not found in Trash',
		'featured_image' => 'Featured Image',
		'set_featured_image' => 'Set Featured Image',
		'remove_featured_image' => 'Remove Featured Image',
		'use_featured_image' => 'Use as Featured Image',
		'insert_into_item' => 'Insert into event',
		'uploaded_to_this_item' => 'Uploaded to this event',
		'items_list' => 'Event list',
		'items_list_navigation' => 'Event list navigation',
		'filter_items_list' => 'Filter event list',
	);
	$args = array(
		'label' => 'Event',
		'description' => 'List of Events',
		'labels' => $labels,
		'supports' => array(
			'title',
			'editor',
			'revisions',
			'thumbnail',
			'excerpt'
		) ,
		'hierarchical' => false,
		'public' => false,
		'rewrite' => array(
			'slug' => 'events',
			'with_front' => false
		) ,
		'menu_position' => 20,
		'menu_icon' => 'dashicons-calendar',
		'can_export' => true,
		'has_archive' => false,
		'capability_type' => 'post',
		'taxonomies' => array(
			'event-categories'
		)
	);
	register_post_type('event', $args);
}
add_action('init', 'dod_register_event_post_type', 0);
