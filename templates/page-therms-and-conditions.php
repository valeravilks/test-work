<?php
/*
 * Template Name: Page Terms and conditions
 */

$context         = Timber::get_context();
$context['post'] = new TimberPost();

Timber::render('04-templates/custom/i360-text-heavy/i360-text-heavy.twig', $context );
