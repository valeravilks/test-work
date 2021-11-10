<?php
/*
 * Template Name: Whitepaper Overview Page
 */

global $paged;
if ( !isset($paged) || !$paged ){
    $paged = 1;
}

$context = Timber::get_context();

//Get the current post context
$context['post'] = new TimberPost();

$args = array(
    'post_type'      => 'whitepaper',
    'posts_per_page' => get_option('posts_per_page', 9),
    'order'          => 'DESC',
    'paged'          => $paged
);

//Used for the resource menu
$context['taxonomy']     = "whitepaper-categories";

$context['posts']        = new Timber\PostQuery( $args );
$context[ 'pagination' ] = Timber::get_pagination();

Timber::render('04-templates/default/default-article-overview/default-article-overview.twig', $context );
