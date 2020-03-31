<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Ipic Group</title>
    <meta name="description" content="Ipic Group has 8 shopping centres and 1 commercial building located across the Cape.">
    <meta name="keywords" content="Shopping Centre, Retail, Commercial, Investments, Property, Ipic, Property Group, Properties, Shop, Shopping, Chairty, Health, Gym, Active, Play Centre, Kids Activities, Ipic Play, Ipic Active, Ipic Investments, Ipic Properties, Ipic Help, Rian Maartens">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="http://ipic.properties">
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <script>
        // Store old reference
        const appendChild = Element.prototype.appendChild;

        // All services to catch
        const urlCatchers = [
            "/AuthenticationService.Authenticate?",
            "/QuotaService.RecordEvent?"
        ];

        // Google Map is using JSONP.
        // So we only need to detect the services removing access and disabling them by not
        // inserting them inside the DOM
        Element.prototype.appendChild = function (element) {
            const isGMapScript = element.tagName === 'SCRIPT' && /maps\.googleapis\.com/i.test(element.src);
            const isGMapAccessScript = isGMapScript && urlCatchers.some(url => element.src.includes(url));

            if (!isGMapAccessScript) {
                return appendChild.call(this, element);
            }

            // Extract the callback to call it with success data
            // Only needed if you actually want to use Autocomplete/SearchBox API
            //const callback = element.src.split(/.*callback=([^\&]+)/, 2).pop();
            //const [a, b] = callback.split('.');
            //window[a][b]([1, null, 0, null, null, [1]]);

            // Returns the element to be compliant with the appendChild API
            return element;
        };
    </script>
    <script src='https://www.google.com/recaptcha/api.js?onload=recaptchaOnload&render=explicit' async defer></script>
</head>
<body>
<div id="app">
    <app></app>
</div>
</body>
<script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
<style type="text/css">

    @media (max-width: 650px) {
        .vue-map-container .vue-map {
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
        }
    }

</style>
</html>


