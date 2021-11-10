<?php

/**
 * Functions (see frontend-hooks.php for hooks) related to everything displayed on frontend
*/


/**
 *  Add edit button to the top of the page when a user is logged-in
 */
function add_page_edit_button() {

	if ( is_user_logged_in() ) {

		global $post;
		$id = $post->id;
		$current_user = wp_get_current_user();

		if(_get_admin_bar_pref( 'front', $current_user->ID) ){
			?>
			<style>
				.top-edit-button {
					z-index: 99999;
					position: fixed;
					text-align: right;
					background-color: rgba(0, 0, 0, 0.8);
					left: 20px;
					bottom: 20px;
					color: #fff;
					overflow: hidden;
					display: inline-block;
					padding: 10px;
					text-transform: uppercase;
					font-size: 12px;
					font-weight: 700;
					letter-spacing: 1px;
				}
				.top-edit-button:hover {
                    background-color: #263870;
                    color: #fff;
				}

			</style>

			<a href="<?php echo admin_url(); ?>post.php?post=<?php echo $id; ?>&action=edit" class="top-edit-button">Edit Content</a>

			<?php
		}

	}
}
add_action('wp_head', 'add_page_edit_button');
