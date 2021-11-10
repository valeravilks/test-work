// Grabbing blog posts. Change to CPT if needed
$args = array(
	'post_type'      => 'post',
	'posts_per_page' => get_option('posts_per_page', 9),
	'order'          => 'DESC',
	'paged'          => $paged
);

// Creating a variable for taxonomy
$context['taxonomy']     = "category";

$context['items']        = new Timber\PostQuery( $args );
$context['pagination' ] = Timber::get_pagination();
