<?php
/** 
 * Plugin Name: Wp React Tutorial
 * Author: James Okolie
 * Author URI: http://github.com/devJames1
 * Version: 1.0.0
 * Description: Wordpress React Tutorial
 * Text-Domain: wp-react-tutorial
*/

if(! defined('ABSPATH')) : exit(); endif; // No directory access allowed.

/**
 * Define Plugins constants
 */
define('WPRT_PATH', trailingslashit( plugin_dir_path(__FILE__)));
define('WPRT_URL', trailingslashit( plugins_url( '/',__FILE__)));


/**
 * Loading Necessary Scripts
 */

add_action('admin_enqueue_scripts', 'load_scripts');
function load_scripts() {
    wp_enqueue_scripts( 'wp-react-tutorial', WPRT_URL . 'build/static/js/main.dcdc44bc.js', ['jquery', 'wp-element', 'react'], wp_rand(), true);
    //localize variables
    wp_localize_script('wp-react-tutorial', 'appLocalizer', ['apiURL' => home_url('/wp-json'),
    'nonce' => wp_create_nonce('wp_rest')]);
}

require_once WPRT_PATH . 'classes/class-create-admin-menu.php';
