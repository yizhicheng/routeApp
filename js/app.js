var module = angular.module("routeApp",["ui.router"]);
//路由配置
module.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.when("", '/index');
    $stateProvider.state("login", {
        url: "/login",
        templateUrl: "views/login.html",
        controller: "LoginCtrl"
    }).state("index", {
        url: "/index",
        views: {
            '' : {
                templateUrl: 'views/index.html'
            },
            'topbar@index': {
                templateUrl: 'views/topbar.html'
            },
            'leftnav@index':{
                templateUrl: 'views/leftnav.html'
            },
            'content@index': {
                templateUrl: 'views/list.html',
                controller: 'RouteListCtl'
            }
        }
    }).state("about", {
        url: "/about",
        views: {
            '': {
                templateUrl: 'views/index.html'
            },
            'topbar@about': {
                templateUrl: 'views/topbar.html'
            },
            'leftnav@about': {
                templateUrl: 'views/leftnav.html'
            },
            'content@about': {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            }
        }
    }).state("form", {
        url: "/form",
        views: {
            '': {
                templateUrl: 'views/index.html'
            },
            'topbar@form' : {
                templateUrl: 'views/topbar.html'
            },
            'leftnav@form': {
                templateUrl: 'views/leftnav.html'
            },
            'content@form': {
                templateUrl: 'views/form.html',
                controller: 'FormCtrl'
            }
        }
    });
    //$urlRouterProvider.otherwise('/login');
});
// module.config(['$routeProvider','$locationProvider',function ($routeProvider,$locationProvider) {
//     // $locationProvider.html5Mode(true);
//     $routeProvider.when('/list', {
//         templateUrl: 'views/list.html',
//         controller: 'RouteListCtl'
//     })
//     .when('/about', {
//         templateUrl: 'views/about.html',
//         controller: 'RouteDetailCtl'
//     })
//     .when('/list/add', {
//         templateUrl: 'views/list.html',
//         controller: 'RouteListCtl'
//     })
//     .otherwise({
//         redirectTo: '/list'
//     });
// }]);

