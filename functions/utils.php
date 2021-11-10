<?php

/**
 * Hooks responsible for utility functions
*/


// Remove the p from around imgs
function dod_remove_ptags_on_images( $content ) {
	return preg_replace( '/<p>\s*(<a .*>)?\s*(<img .* \/>)\s*(<\/a>)?\s*<\/p>/iU', '\1\2\3', $content );
}


// remove the WordPress emoji code
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');

remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
remove_action( 'admin_print_styles', 'print_emoji_styles' );

// Remove Really Simple Discovery
remove_action('wp_head', 'rsd_link');

// Remove Windows Live Writer
remove_action('wp_head', 'wlwmanifest_link');

// WordPress Generator
remove_action('wp_head', 'wp_generator');

//Remove JQuery migrate
// function remove_jquery_migrate($scripts)
// {
//     if (!is_admin() && isset($scripts->registered['jquery'])) {
//         $script = $scripts->registered['jquery'];
//
//         if ($script->deps) { // Check whether the script has any dependencies
//             $script->deps = array_diff($script->deps, array(
//                 'jquery-migrate'
//             ));
//         }
//     }
// }
//
// add_action('wp_default_scripts', 'remove_jquery_migrate');

//allow svg and vcard uploads to wordpress
add_filter( 'upload_mimes', function ( $existing_mimes = array() ) {
	$existing_mimes['svg'] = 'image/svg+xml';
	$existing_mimes['vcf'] = 'text/x-vcard';
	return $existing_mimes;
} );

// youtube iframe responsive
add_filter('embed_oembed_html', 'wrap_embed_with_div', 10, 3);
function wrap_embed_with_div($html, $url, $attr) {
	return "<div class=\"responsive-iframe-wrapper\"><div class=\"responsive-container\">".$html."</div></div>";
}

/**
 * Get posts via custom query
 *
 * @param mixed $post_type
 * @param int $post_count
 * @param mixed $orderby
 * @param mixed $order
 * @param int $excluded_post_id
 * @return object
 */
function get_cpt_posts_by( $post_type, $post_count = -1, $orderby = 'post_date', $order = 'DESC', $excluded_post_id = 0 ) {
    global $paged;
    if ( !isset( $paged ) || !$paged ){
        $paged = 1;
    }

    $args = array(
        'post_type'      => $post_type,
        'posts_per_page' => $post_count,
        'orderby'        => $orderby,
        'order'          => $order,
        'paged'          => $paged
    );

    if ( $excluded_post_id != 0 ) {
        $args[ 'post__not_in' ] = array( $excluded_post_id );
    }

    return new Timber\PostQuery( $args );
}

/**
 * Glossary logic realization
 *
 * @param string $title_first_letter
 * @param array $section_info
 * @param array $glossary_sections_array
 * @param boolean $last_iteration_index
 * @return array
 */
function create_glossary( $title_first_letter, $section_info, $glossary_sections_array, $last_iteration_index ) {
    if ( array_key_exists( $title_first_letter, $glossary_sections_array ) ) {
        array_push( $glossary_sections_array[ $title_first_letter ], $section_info );
    } else {
        $glossary_sections_array[ $title_first_letter ][] = $section_info;
    }

    if ( $last_iteration_index ) {
        ksort( $glossary_sections_array );
    }

    return $glossary_sections_array;
}

/* Remove menu items */
function custom_menu_page_removing() {
    remove_menu_page( 'edit-comments.php' );
}
add_action( 'admin_menu', 'custom_menu_page_removing' );

/* Remove comments system */
// Disable support for comments and trackbacks in post types
function disable_comments_post_types_support() {
    $post_types = get_post_types();
    foreach ($post_types as $post_type) {
        if(post_type_supports($post_type, 'comments')) {
            remove_post_type_support($post_type, 'comments');
            remove_post_type_support($post_type, 'trackbacks');
        }
    }
}
add_action('admin_init', 'disable_comments_post_types_support');

// Close comments on the front-end
function disable_comments_status() {
    return false;
}
add_filter('comments_open', 'disable_comments_status', 20, 2);
add_filter('pings_open', 'disable_comments_status', 20, 2);

// Hide existing comments
function disable_comments_hide_existing_comments($comments) {
    $comments = array();
    return $comments;
}
add_filter('comments_array', 'disable_comments_hide_existing_comments', 10, 2);

// Remove comments page in menu
function disable_comments_admin_menu() {
    remove_menu_page('edit-comments.php');
}
add_action('admin_menu', 'disable_comments_admin_menu');

// Redirect any user trying to access comments page
function disable_comments_admin_menu_redirect() {
    global $pagenow;
    if ($pagenow === 'edit-comments.php') {
        wp_redirect(admin_url()); exit;
    }
}
add_action('admin_init', 'disable_comments_admin_menu_redirect');

// Remove comments metabox from dashboard
function disable_comments_dashboard() {
    remove_meta_box('dashboard_recent_comments', 'dashboard', 'normal');
}
add_action('admin_init', 'disable_comments_dashboard');

// Remove comments links from admin bar
function disable_comments_admin_bar() {
    if (is_admin_bar_showing()) {
        remove_action('admin_bar_menu', 'wp_admin_bar_comments_menu', 60);
    }
}
add_action('init', 'disable_comments_admin_bar');

/**
 * Get Headings ( h1-h6 ) title from the content.
 *
 * @param string $content
 * @param string $h_tag if empty return all tags content.
 * @return array
 */
function dod_get_content_headings( $content, $h_tag = '^' ) {
    preg_match_all( '|<h[' .  $h_tag . '>]+>(.*)</h[' .  $h_tag . '>]+>|iU', $content, $matches );
    return $matches[1];
}
