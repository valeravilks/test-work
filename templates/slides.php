<?php
/*
 * Template Name: Slides Page
 */

$context         = Timber::get_context();
$context['post'] = new TimberPost();

Timber::render('./src/patterns/pages-default/slides.twig', $context );
