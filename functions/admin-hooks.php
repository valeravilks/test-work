<?php

/**
 * Hooks related to content structure and everything displayed on admin side
*/


// Remove top admin bar
add_filter('show_admin_bar', '__return_false');
