var module = angular.module("routeApp",["ngRoute"]);
//路由配置
module.config(['$routeProvider','$locationProvider',function ($routeProvider,$locationProvider) {
    // $locationProvider.html5Mode(true);
    $routeProvider.when('/list', {
        templateUrl: 'views/list.html',
        controller: 'RouteListCtl'
    })
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'RouteDetailCtl'
    })
    .otherwise({
        redirectTo: '/list'
    });
}]);

