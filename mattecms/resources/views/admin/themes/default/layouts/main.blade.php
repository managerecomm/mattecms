<!doctype html>
<html lang="{{ env('APP_LANG', 'ru') }}">
<head>
    <base href="{{ env('APP_URL') }}">
    <title>Document</title>
    <meta name="keywords" content="Page keywords">
    <meta name="description" content="Page description">
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- Top Assets -->
    <link href="{{ URL::asset('css/app.css') }}" rel="stylesheet">
</head>
<body class="fixed-navbar has-animation">
    <header class="header">
        <div class="flexbox flex-1">
            <ul class="nav navbar-toolbar">
                <li><a class="nav-link" href="/">Главная</a></li>
                <li><a class="nav-link" href="/categories">Категории</a></li>
                <li><a class="nav-link" href="#">Item 3</a></li>
                <li><a class="nav-link" href="#">Item 4</a></li>
                <li><a class="nav-link" href="#">Item 5</a></li>
            </ul>
            <ul class="nav navbar-toolbar">
                <li><a class="nav-link" href="/{{ env('APP_ADMIN_URI') }}">Панель управления</a></li>
            </ul>
        </div>
    </header>
    <div class="layout-outer d-flex">
        <div class="leftblock-outer" id="leftblock">
            <!-- Search Block -->
            <div class="admin-search-block p-4">
                <div class="input-group-icon input-group-icon-left">
                    <span class="input-icon input-icon-left"><i class="las la-search"></i></span>
                    <input class="form-control form-control-lg form-control-solid" type="text" placeholder="Поиск">
                </div>
            </div>
            <!-- Menu -->
            <div class="ibox" id="leftmenu">
                <div id="heading0">
                    <div class="leftmenu-root collapsed  ibox-head flexbox-b w-100" role="button" data-toggle="collapse" data-target="#collapse0" aria-expanded="true" aria-controls="collapse0">
                        <i class="las la-book mr-3 font-30"></i> Сайт
                    </div>
                </div>
                <div id="collapse0" class="collapse">
                    <div class="leftmenu-body ibox-body">
                        <ul class="leftsubmenu">
                            <li>
                                <a href="">
                                    <i class="las la-file-code mr-2 font-30"></i>
                                    <span class=" flex-grow-1">Главная</span>
                                    <span class="leftmenu-info text-muted text-right"><b>id:</b> 0; <b>uri:</b> /</span>
                                </a>
                            </li>
                            <li>
                                <a class="category" href="#" onclick="return false;"  data-toggle="collapse" data-target="#collapse5" aria-expanded="true" data-body="collapse5">
                                    <i class="lar la-folder-open mr-2 font-30"></i>
                                    <span class="flex-grow-1">Category 1</span>
                                    <span class="leftmenu-info text-muted text-right"><b>id:</b> 2; <b>uri:</b> /category-1</span>
                                    <span class="badge badge-primary badge-circle ml-4">4</span>
                                </a>
                                <ul id="collapse5" class="collapse">
                                    <li><a href=""><i class="las la-file-code mr-2 font-30"></i>Resource 1</a></li>
                                    <li><a href=""><i class="las la-file-code mr-2 font-30"></i>Resource 2</a></li>
                                    <li><a href=""><i class="las la-file-code mr-2 font-30"></i>Resource 3</a></li>
                                    <li><a href=""><i class="las la-file-code mr-2 font-30"></i>Resource 4</a></li>
                                </ul>
                            </li>
                            <li><a href=""><i class="las la-folder mr-2 font-30"></i>Category 2</a></li>
                            <li><a href=""><i class="las la-folder mr-2 font-30"></i>Category 3</a></li>
                            <li><a href=""><i class="las la-folder mr-2 font-30"></i>Category 4</a></li>
                            <li><a href=""><i class="las la-folder mr-2 font-30"></i>Category 5</a></li>
                        </ul>
                    </div>
                </div>
                <div id="heading1">
                    <div class="leftmenu-root collapsed ibox-head flexbox-b w-100" role="button" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                        <i class="las la-shopping-cart mr-3 font-30"></i> Магазин
                    </div>
                </div>
                <div id="collapse1" class="collapse" aria-labelledby="heading1" data-parent="#leftmenu">
                    <div class="ibox-body">

                    </div>
                </div>
            </div>
        </div>
        <div class="midblock-outer flex-grow-1 fade-in-up p-3" id="midblock">
            <main>@yield('content')</main>
        </div>
        </div>
    </div>
    <!-- Bottom Assets -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="{{ URL::asset('js/bootstrap.bundle.min.js') }}"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
    <script src="{{ URL::asset('js/jquery.cookie.js') }}"></script>
    <script src="{{ URL::asset('js/app.js') }}"></script>
</body>
</html>
