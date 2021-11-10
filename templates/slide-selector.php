<?php
/*
 * Template Name: Slide Selector Page
 */

$context         = Timber::get_context();
$context['post'] = new TimberPost();

Timber::render('./src/patterns/pages-default/slide-selector.twig', $context );
