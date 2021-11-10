<?php
/*
 * Register Taxonomy: Media Coverage Category
 * Taxonomy linked to: Media Coverage
*/
function dod_register_media_coverage_category_taxonomy()
{
	$labels = array(
		'name' => _x('Media Coverage Category', 'taxonomy general name', 'textdomain') ,
		'singular_name' => _x('Media Coverage Category', 'taxonomy singular name', 'textdomain') ,
		'search_items' => __('Search Media Coverage Categories', 'textdomain') ,
		'all_items' => __('All Media Coverage Categories', 'textdomain') ,
		'parent_item' => __('Parent Media Coverage Category', 'textdomain') ,
		'parent_item_colon' => __('Parent Media Coverage Category:', 'textdomain') ,
		'edit_item' => __('Edit Media Coverage Category', 'textdomain') ,
		'update_item' => __('Update Media Coverage Category', 'textdomain') ,
		'add_new_item' => __('Add New Media Coverage Category', 'textdomain') ,
		'new_item_name' => __('New Media Coverage Category Name', 'textdomain') ,
		'menu_name' => __('Media Coverage Categories', 'textdomain')
	);

	$args = array(
		'hierarchical' => true,
		'labels' => $labels,
		'show_ui' => true,
		'show_admin_column' => true,
		'query_var' => true,
		'rewrite' => array(
			'slug' => 'media-coverage-category'
		)
	);
	register_taxonomy('media-coverage-category', array(
		'media-coverage'
	) , $args);
}
add_action('init', 'dod_register_media_coverage_category_taxonomy', 0);
