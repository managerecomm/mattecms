<?php

/* Site */

Route::get('/', 'Site\SiteBaseController@index');

/* Admin */

$admin_uri = env('APP_ADMIN_URI', 'admin');