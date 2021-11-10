<?php

/**
 * Setup variables that should be available via $context in all the templates
*/


if ( class_exists( 'TimberSite' ) ) {
	// Extend TimberSite to create our own
	class DodSite extends TimberSite {

		function __construct() {
			add_filter( 'timber_context', array( $this, 'dod_add_to_context' ) );
			parent::__construct();
		}

		function dod_add_to_context( $context ) {

			// Default site and site options
			$context['site']    = $this;
			$context['options'] = get_fields( 'option' );
			$context['sidebar'] = Timber::get_sidebar( 'sidebar.php' );

			// Add Registered menus to the context
			$menus = get_registered_nav_menus();
			foreach ( $menus as $location => $description ) {
				$context[ $location ] = new TimberMenu( $location );
			}

			//add sidebars to context
			global $wp_registered_sidebars;
			foreach ( $wp_registered_sidebars as $sidebar => $details ) {
				$context[ $sidebar ] = Timber::get_widgets( $sidebar );
			}

			return $context;
		}
	}
	new DodSite();
}