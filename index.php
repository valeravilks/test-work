<?php
/**
 * The main template file
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

/*
 * Timber Context
*/
$context = Timber::context();

/*
 * Setting up Timber
*/
if ( is_singular() ) :
	$context['post'] = new TimberPost();
else :
	$context['pagination'] = Timber::get_pagination();
	$context['posts']      = new Timber\PostQuery();
endif;

/*
 * Single Post Type Templates.
*/
if ( is_single() ) :
	$template = '04-templates/custom/i360-article-single/i360-article-single.twig';

	//Conditionally change the template for individual post types
	if ( is_singular( 'case-studies' ) ) :
		$template = '04-templates/base/base-page-template-blocks/base-page-template-blocks.twig';
    elseif ( is_singular('event' )) :
		$template = '04-templates/default/default-page-single/default-page-single.twig';
    elseif ( is_singular('news' )) :
	$template = '04-templates/custom/i360-article-single/i360-article-single.twig';
    elseif ( is_singular('whitepaper' )) :
	$template = '04-templates/custom/i360-article-single/i360-article-single.twig';
	endif;

/*
 * Basic Page Template
*/
elseif ( is_page() ) :
	$template = '04-templates/default/default-page-single/default-page-single.twig';

elseif ( is_home() ) :
    global $paged;
    if ( !isset($paged) || !$paged ){
        $paged = 1;
    }
	//get the current post context so we can use it for The blog roll page hero and other fields
	$context['post'] = new TimberPost();

	$args = array(
		'post_type'      => 'post',
		'posts_per_page' => 9,
		'paged'          => $paged
	);

	$context['posts'] = new Timber\PostQuery( $args );

	$template = '04-templates/custom/i360-article-overview/i360-article-overview.twig';

/*
* Search results Template
*/
elseif ( is_search() ) :
	global $query_string;
	if (!empty(get_search_query())) :
		wp_parse_str($query_string, $search_query);
		$context['items']        = new Timber\PostQuery( $search_query );
		$context['search_query'] =  get_search_query();

		if($context['search_query'] !== '' ){
			$context['results_count'] =   $context['posts'] ->found_posts;
		} else {
			$context['results_count'] =  0;
		}
	endif;
	$context['pagination' ] = Timber::get_pagination();
	$template = '04-templates/custom/i360-search-results/i360-search-results.twig';

/*
 * Archive Templates
*/
elseif ( is_archive() ) :
	$context['post']       = new TimberPost();
	$context['pagination'] = Timber::get_pagination();

	/*
	 * Blog Category
	*/
	if( is_category() ) :
		$context['taxonomy']     = "category";
        $context['post']->title = get_the_archive_title();
		$template = '04-templates/custom/i360-article-overview/i360-article-overview.twig';

	/*
	 * Blog Overview Page
	*/
 	elseif (is_post_type_archive('blog')) :
        $context['post']->title = get_the_archive_title();
		$template = '04-templates/custom/i360-article-overview/i360-article-overview.twig';

	/*
	 * Case Study Overview Page
	*/
 	elseif (is_post_type_archive('case-studies')) :
		$context['taxonomy']     = "case-studies-categories";
        $context['post']->title = get_the_archive_title();
		$template = '04-templates/custom/i360-article-overview/i360-article-overview.twig';

	/*
	 * Case Study Category Overview Page
	*/
	elseif ( is_tax( 'case-study-categories' ) ) :
		$context['taxonomy']     = "case-studies-categories";
        $context['post']->title = get_the_archive_title();
		$template = '04-templates/custom/i360-article-overview/i360-article-overview.twig';

	/*
	 * White Paper Overview Page
	*/
 	elseif (is_post_type_archive('whitepaper')) :
 		$context['taxonomy']     = "whitepaper-categories";
        $context['post']->title = get_the_archive_title();
		$template = '04-templates/custom/i360-article-overview/i360-article-overview.twig';

	/*
	 * White Paper Category Overview Page
	*/
	elseif ( is_tax( 'whitepaper-categories' ) ) :
		$context['taxonomy']     = "whitepaper-categories";
        $context['post']->title = get_the_archive_title();
		$template = '04-templates/custom/i360-article-overview/i360-article-overview.twig';

	/*
	 * Event Overview Page
	*/
 	elseif (is_post_type_archive('event')) :
 		$context['taxonomy']     = "event-categories";
        $context['post']->title = get_the_archive_title();
		$template = '04-templates/custom/i360-article-overview/i360-article-overview.twig';

	/*
	 * Event Category Overview Page
	*/
	elseif ( is_tax( 'event-categories' ) ) :
		$context['taxonomy']     = "event-categories";
        $context['post']->title = get_the_archive_title();
		$template = '04-templates/custom/i360-article-overview/i360-article-overview.twig';


	elseif ( is_tag() ) :
        $context['post']->title = get_the_archive_title();
        $template = '04-templates/custom/i360-article-overview/i360-article-overview.twig';

	elseif ( is_author() ) :
		$context['post']['title'] = 'Posts by: ' . get_the_author();

	elseif ( is_date() ) :
		$context['post']['title'] = get_the_archive_title();
	endif;
endif;

Timber::render( array( $template . '', 'base-page.twig' ), $context );
