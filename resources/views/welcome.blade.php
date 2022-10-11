<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Dexterapp</title>

        <link rel="icon" href="{{ asset('/images/flag.png')}}">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;600;700&display=swap" rel="stylesheet">

     @viteReactRefresh
     @vite(['resources/css/app.css', 'resources/js/app.jsx'])
    </head>
    <body >
       <div id="root"></div>
    </body>
</html>
