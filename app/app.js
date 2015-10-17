angular
    .module('starterApp', ['ngMaterial', 'users'])
    .config(function($mdThemingProvider, $mdIconProvider, $provide){

        $mdIconProvider
            .defaultIconSet("./assets/svg/avatars.svg", 128)
            .icon("menu"       , "./assets/svg/menu.svg"        , 24)
            .icon("share"      , "./assets/svg/share.svg"       , 24)
            .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
            .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
            .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
            .icon("phone"      , "./assets/svg/phone.svg"       , 512);

        $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('red');

        //clear up console error regarding unavailability of push state in chrome packaged apps
        $provide.decorator('$window', function($delegate) {
            $delegate.history = null;
            return $delegate;
        });

    });