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
                LEFT BLOCK
            </div>
            <div class="midblock-outer flex-grow-1 fade-in-up" id="midblock">
                <main>@yield('content')</main>
            </div>

    </div>
    <!-- Bottom Assets -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
    <script src="{{ URL::asset('js/jquery.cookie.js') }}"></script>
    <script src="{{ URL::asset('js/app.js') }}"></script>
</body>
</html>
