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
            <div class="admin-search-block p-3">
                <div class="input-group-icon input-group-icon-left">
                    <span class="input-icon input-icon-left"><i class="las la-search"></i></span>
                    <input class="form-control form-control-solid" type="text" placeholder="Поиск">
                </div>
            </div>
            <!-- Menu -->
            <div class="ibox" id="leftmenu">
                <div id="heading0">
                    <div class="ibox-head flexbox-b w-100" type="button" data-toggle="collapse" data-target="#collapse0" aria-expanded="true" aria-controls="collapse0">
                        <i class="las la-book mr-3 font-26"></i> Сайт
                    </div>
                </div>
                <div id="collapse0" class="collapse" aria-labelledby="heading0" data-parent="#leftmenu">
                    <div class="ibox-body">

                    </div>
                </div>
                <div id="heading1">
                    <div class="ibox-head flexbox-b w-100" type="button" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                        <i class="las la-shopping-cart mr-3 font-26"></i> Магазин
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
