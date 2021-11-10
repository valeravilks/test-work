<?php
/*
 * Template Name: Elphie Blocks Page
 */

$context         = Timber::get_context();
$context['post'] = new TimberPost();

Timber::render('04-templates/elphie/page-builder/type-1/type-1.twig', $context );
