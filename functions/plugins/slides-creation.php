<?php

/**
 * Functions related to specific plugins
*  One plugin per file
*/

/**
 * Slides Creation
 */
Routes::map('create-client/', function ($params) {
    // if (!current_user_can('edit_posts')) {
    //     wp_send_json([
    //         'error' => 'Your Are Not An Admin'
    //     ]);
    //     exit;
    // }

    $client_name = $_POST['client_name'];
    $client_url = $_POST['client_url'];
    $rep_id = $_POST['rep_id'];

    $posts = get_posts([
        'post_type' => 'client',
        'name' => $client_name
    ]);

    // if client-name already exists:
    if (count($posts) > 0) {
        wp_send_json([
            'error' => 'This URL Already Exists. Please remove this URL from the Wordpress back-end (under Clients) in order to use it.'
        ]);
    } else {
        // create Client-CPT
        $new_post_id = wp_insert_post([
            'post_title' => $client_name,
            'post_type' => 'client',
            'post_status' => 'publish'
        ]);

        $rep_post = get_post($rep_id);
        update_post_meta($new_post_id, 'redirect_url', $client_url);
        update_post_meta($new_post_id, 'rep', $rep_post->ID);

        $url = get_permalink($new_post_id);

        wp_send_json([
            'msg' => 'The URL has been successfully created',
            'url' => $url
        ]);
    }
});

