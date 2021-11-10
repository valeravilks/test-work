<?php
/*
 * Template Name: Freestyle Blocks Test Page
 */

$context         = Timber::get_context();
$context['post'] = new TimberPost();

Timber::render('04-templates/base/base-page-template-blocks/base-page-template-blocks.twig', $context );
