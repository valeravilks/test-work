<?php
/*
 * Register Taxonomy: Organization Position
 * Taxonomy linked to: Staff
*/
function dod_register_taxonomy_organization_position()
{
	$labels = [
		'name' => _x('Positions', 'taxonomy general name'),
		'singular_name' => _x('Position', 'taxonomy singular name'),
		'search_items' => __('Search Positions'),
		'all_items' => __('All Positions'),
		'parent_item' => __('Parent Position'),
		'parent_item_colon' => __('Parent Position:'),
		'edit_item' => __('Edit Position'),
		'update_item' => __('Update Position'),
		'add_new_item' => __('Add New Position'),
		'new_item_name' => __('New Position Name'),
		'menu_name' => __('Positions'),
		];
	$args = [
		'hierarchical' => true,
		'labels' => $labels,
		'show_ui' => true,
		'show_admin_column' => true,
		'query_var' => true,
		'rewrite' => [
			'slug' => 'corporate-position'
			],
		];
	register_taxonomy('corporate-position', ['staff'], $args);
}

add_action('init', 'dod_register_taxonomy_organization_position');
