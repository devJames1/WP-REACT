<?php
/**
 * This file will create custom rest API End Points
 */

class WP_React_Settings_Rest_Route {

    public function __construct(){
        add_action('rest_api_init', [$this, 'create_rest_routes']);
    }

    public function create_rest_routes(){

        register_rest_route('wprt/v1', '/settings', [
            'methods' => 'GET',
            'callback' => [$this, 'get_settings'],
            'permission_callback' => [$this,'get_settings_permission']
        ]);
    
        register_rest_route('wprt/v1', '/settings', [
            'methods' => 'POST',
            'callback' => [$this, 'save_settings'],
            'permission_callback' => [$this,'save_settings_permission']
        ]);
    }

    public function get_settings(){

        $firstname = get_option('wprt_settings_firstname');
        $lastname = get_option('wprt_settings_lastname');
        $email = get_option('wprt_settings_email');

        $response = [
            'firstname' => $firstname,
            'lastname' => $lastname,
            'email' => $email
        ];

        return rest_ensure_response($response);
    }

    public function get_settings_permission(){
        return true;
    }

    public function save_settings($req) {
        // never trust a user text, so always enclose in sanitize_text_field
        $firstname = sanitize_text_field($req['firstname']);
        $lastname = sanitize_text_field($req['lastname']);
        $email = sanitize_text_field($req['email']);
        //Update the values
        update_option('wprt_settings_firstname', $firstname);
        update_option('wprt_settings_lastname', $lastname);
        update_option('wprt_settings_email', $email);

        return rest_ensure_response('success');
    }

    public function save_settings_permission() {
        //after setting header in js file post request use this to return true of user have this rights
        return current_user_can('publish_posts');
    }
}

new WP_React_Settings_Rest_Route();