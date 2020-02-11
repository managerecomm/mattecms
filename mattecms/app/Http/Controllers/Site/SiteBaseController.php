<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SiteBaseController extends Controller
{
    public function index()
    {
        return view('site.themes.default.home.index');
    }
}
