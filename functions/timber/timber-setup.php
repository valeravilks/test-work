<?php

/**
 * Setup Timber environment
*/


/**
 * Check if Timber is loaded
 */
if ( ! class_exists( 'Timber' ) ) {
	add_action( 'admin_notices', function () {
		echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url( admin_url( 'plugins.php#timber' ) ) . '">' . esc_url( admin_url( 'plugins.php' ) ) . '</a></p></div>';
	} );
} else {
	Timber::$dirname = array( 'src', 'src/patterns', 'src/patterns/03-organisms/base/base-block/base-block');
}
