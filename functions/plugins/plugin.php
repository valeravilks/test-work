<?php

/**
 * Functions related to specific plugins
*  One plugin per file
*/

/**
 * Move Yoast SEO to the bottom of the page
 */
add_filter( 'wpseo_metabox_prio', function () {
	$return = 'low';

	return $return;
} );

