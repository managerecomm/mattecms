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
    <main class="page-content fade-in-up">
        @yield('content')
    </main>
    <!-- Bottom Assets -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="{{ URL::asset('js/app.js') }}"></script>
</body>
</html>
