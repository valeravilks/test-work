<?php

/**
 * Theme functions
 * See descriptions in each `require`d file
 *
 */


$functions_path = get_template_directory() . '/functions/';

// Obtain and setup shared variables
require_once( $functions_path . 'common-variables.php');

// Timber setup
require_once( $functions_path . 'timber/timber-setup.php');
require_once( $functions_path . 'timber/extend-twig.php');
require_once( $functions_path . 'timber/timber-extend-site.php');

// Client side PHP data (script localization, AJAX, etc.)
require_once( $functions_path . 'script-data/script-data.php');

// Basic theme setup
require_once( $functions_path . 'theme-setup/theme-support.php');
require_once( $functions_path . 'theme-setup/register-scripts.php');

// Custom theme functions and hooks
require_once( $functions_path . 'frontend-hooks.php');
require_once( $functions_path . 'frontend-functions.php');
require_once( $functions_path . 'admin-hooks.php');
require_once( $functions_path . 'utils.php');

// Plugins dependent functions and hooks
require_once( $functions_path . 'plugins/acf.php');

// Security
require_once( $functions_path . 'security.php');

// require_once( $functions_path . 'plugins/slides-creation.php');
require_once( $functions_path . 'plugins/plugin.php');
