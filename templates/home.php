<?php
/*
 * Template Name: Home Blocks Page
 */

$context         = Timber::get_context();
$context['post'] = new TimberPost();

Timber::render('04-templates/base/base-page-template-home/base-page-template-home.twig', $context );
