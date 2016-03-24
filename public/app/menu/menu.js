/**
 * Created by Administrator on 3/24/2016.
 */

angular.module("app-menu", [])
    // route init
    .directive('appMenu',[
        function () {
            return {
                restrict: 'A',
                templateUrl: '/public/app/menu/menu.htm'
            }
        }
    ])
;