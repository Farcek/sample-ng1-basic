/**
 * Created by Administrator on 3/24/2016.
 */

angular.module("app-home", [])
    .config(['$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('home', {
                    url: "/home",
                    templateUrl : '/public/src/home/home.htm'
                })
                .state('home.view1', {
                    url: "/view1",
                    views: {
                        "viewA": {template: "view1.viewA"},
                        "viewB": {template: "view1.viewB"}
                    }
                })
                .state('home.view2', {
                    url: "/view2",
                    views: {
                        "viewA": {template: "view2.viewA"},
                        "viewB": {template: "view2.viewB"}
                    }
                })
        }
    ]);