<?php
/**
 * Plugin Name: Custom Post Types
 * Plugin URI: http://www.dreamersofday.co
 * Description: Register Custom Post Types & Taxonomies
 * Version: 1.0.0
 * Author: Dreamers of Day
 * Author URI: http://www.dreamersofday.co
 */

if ( defined( 'WPMU_PLUGIN_DIR' ) ) {
	$mu_plugins_dir = trailingslashit( WPMU_PLUGIN_DIR );

} else {
	$mu_plugins_dir = plugin_dir_path( __FILE__ ) . '../mu-plugins/';
}
$plugin_path =  $mu_plugins_dir. 'custom-post-types';
$ct_dir_path = $plugin_path . '/custom-taxonomies/';
$pt_dir_path = $plugin_path . '/post-types/';

/*
 * Register Post Type: Staff
*/
require_once( $pt_dir_path . 'pt_staff.php');

/*
 * Register Taxonomy: Organization Position
 * Taxonomy linked to: Staff
*/
require_once( $ct_dir_path . 'ct_organization_position.php');

/*
 * Register Post Type: CTA (Register to Action)
*/
require_once( $pt_dir_path . 'pt_cta.php');

/*
 * Register Post Type: Testimonial
*/
require_once( $pt_dir_path . 'pt_testimonial.php');

/*
* Register Taxonomy: Testimonial Author
 * Taxonomy linked to: Testimonial
*/
require_once( $ct_dir_path . 'ct_testimonial_author.php');

/*
* Register Taxonomy: Testimonial Organization
 * Taxonomy linked to: Testimonial
*/
require_once( $ct_dir_path . 'ct_testimonial_organization.php');

/*
* Register Taxonomy: Testimonial Position
 * Taxonomy linked to: Testimonial
*/
require_once( $ct_dir_path . 'ct_testimonial_position.php');

/*
 * Register Post Type: Badge
*/
require_once( $pt_dir_path . 'pt_badge.php');

/*
 * Register Post Type: Location
*/
require_once( $pt_dir_path . 'pt_location.php');

/*
 * Register Post Type: Event
*/
require_once( $pt_dir_path . 'pt_event.php');

/*
* Register Taxonomy: Event Category
 * Taxonomy linked to: Event
*/
require_once( $ct_dir_path . 'ct_event_category.php');

/*
 * Register Post Type: Icon
*/
require_once( $pt_dir_path . 'pt_icon.php');

/*
 * Register Post Type: Banner
*/
require_once( $pt_dir_path . 'pt_banner.php');

/*
 * Register Post Type: Job Post
*/
require_once( $pt_dir_path . 'pt_job_post.php');

/*
* Register Taxonomy: Department
 * Taxonomy linked to: Job Post
*/
require_once( $ct_dir_path . 'ct_department.php');

/*
* Register Taxonomy: Region
 * Taxonomy linked to: Job Post
*/
require_once( $ct_dir_path . 'ct_region.php');

/*
 * Register Post Type: Whitepaper
*/
require_once( $pt_dir_path . 'pt_whitepapers.php');

/*
* Register Taxonomy: Whitepaper Category
 * Taxonomy linked to: Whitepaper
*/
require_once( $ct_dir_path . 'ct_whitepapers_category.php');

/*
 * Register Post Type: Quote
*/
require_once( $pt_dir_path . 'pt_quote.php');

/*
 * Register Post Type: Notification
*/
require_once( $pt_dir_path . 'pt_notification.php');

/*
 * Register Post Type: Case Study
*/
require_once( $pt_dir_path . 'pt_case_studies.php');

/*
* Register Taxonomy: Case Study Category
 * Taxonomy linked to: Case Study
*/
require_once( $ct_dir_path . 'ct_case_studies_category.php');

/*
 * Register Post Type: Resource
*/
require_once( $pt_dir_path . 'pt_resource.php');

/*
* Register Taxonomy: Resource Category
 * Taxonomy linked to: Resource
*/
require_once( $ct_dir_path . 'ct_resource_category.php');

/*
 * Register Post Type: News
*/
require_once( $pt_dir_path . 'pt_news.php');

/*
* Register Taxonomy: News Category
 * Taxonomy linked to: News
*/
require_once( $ct_dir_path . 'ct_news_category.php');

/*
 * Register Post Type: Media Coverage
*/
require_once( $pt_dir_path . 'pt_media_coverage.php');

/*
* Register Taxonomy: Media Coverage Category
 * Taxonomy linked to: Media Coverage
*/
require_once( $ct_dir_path . 'ct_media_coverage_category.php');
