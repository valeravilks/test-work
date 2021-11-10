<?php

if ( defined( 'WPMU_PLUGIN_DIR' ) ) {
	$mu_plugins_dir = trailingslashit( WPMU_PLUGIN_DIR );

} else {
	$mu_plugins_dir = plugin_dir_path( __FILE__ ) . '../mu-plugins/';
}

require( $mu_plugins_dir. '/custom-post-types/custom-post-types.php');
