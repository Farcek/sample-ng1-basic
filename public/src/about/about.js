/**
 * Created by Administrator on 3/24/2016.
 */
angular.module("app-about", [])
    .config(['$stateProvider','$urlRouterProvider',
        function ($stateProvider,$urlRouterProvider) {
            $urlRouterProvider.when('/about', '/about/addr');
            $stateProvider
                .state('about', {
                    url: "/about",
                    templateUrl : '/public/src/about/about.htm'
                })
                .state('about.addr', {
                    url: "/addr",
                    templateUrl : '/public/src/about/about.addr.htm'
                })
                .state('about.contact', {
                    url: "/contact",
                    templateUrl : '/public/src/about/about.contact.htm'
                })
        }
    ]);