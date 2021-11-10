<?php
/*
 * Template Name: Components Test Page
 */

$context         = Timber::get_context();

$args = array(
	'post_type'      => 'post',
	'posts_per_page' => get_option('posts_per_page', 9),
	'order'          => 'DESC',
	'paged'          => $paged
);

//Used for the resource menu
$context['taxonomy']     = "category";

$context['items']        = new Timber\PostQuery( $args );
$context['pagination' ] = Timber::get_pagination();
$context['post'] = new TimberPost();

Timber::render('04-templates/sample/sample-components/sample-components.twig', $context );
