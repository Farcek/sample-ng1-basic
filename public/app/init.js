/**
 * Created by Administrator on 3/24/2016.
 */

angular.module("app-init", [])
    // route init
    .config(['$locationProvider',
        function ($locationProvider) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
            $locationProvider.hashPrefix('!');
        }
    ])
    // route init
    .config(['$urlRouterProvider',
        function ($urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');
        }
    ])
;