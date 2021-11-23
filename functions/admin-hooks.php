<?php

/**
 * Hooks related to content structure and everything displayed on admin side
*/


// Remove top admin bar
add_filter('show_admin_bar', '__return_false');

// Hide the ACF Fields Group menu item for the staging and production sites.
add_filter('acf/settings/show_admin', function() {
    $env = wp_get_environment_type();
    $hide_list = ['production', 'staging'];
    return !in_array( $env, $hide_list );
});
