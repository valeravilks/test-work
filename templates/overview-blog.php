<?php
/*
 * Template Name: Blog Overview Page
 */

global $paged;
if ( !isset($paged) || !$paged ){
    $paged = 1;
}

$context = Timber::get_context();

//Get the current post context
$context['post'] = new TimberPost();

$args = array(
    'post_type'      => 'post',
    'posts_per_page' => get_option('posts_per_page', 9),
    'order'          => 'DESC',
    'paged'          => $paged
);

//Used for the resource menu
$context['taxonomy']     = "category";

$context['posts']        = new Timber\PostQuery( $args );
$context[ 'pagination' ] = Timber::get_pagination();

Timber::render('04-templates/custom/i360-article-overview/i360-article-overview.twig', $context );
