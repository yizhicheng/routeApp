var siteConfig = {
    "domain" : "http://10.0.2.89/"
};
var leftNav = [{
    uri: 'index',
    text: '账户列表'
},{
    uri: 'about',
    text: '关于我们'
},{
    uri: 'form',
    text: '添加账户'
},{
    uri: 'accordion',
    text: '手风琴效果'
},{
    uri: 'alert',
    text: '弹出框'
},{
    uri: 'datepicker',
    text: '日期选择器'
},{
    uri: 'buttons',
    text: 'Buttons'
},{
    uri: 'carousel',
    text: 'Carousel'
},{
    uri: 'collapse',
    text: 'Collapse'
},{
    uri: 'dropdown',
    text: 'DropDown'
},{
    uri: 'popover',
    text: 'PopOver'
},{
    uri: 'progressbar',
    text: 'ProgressBar'
},{
    uri: 'rating',
    text: 'Rating'
},{
    uri: 'tabs',
    text: 'Tabs'
},{
    uri: 'timepicker',
    text: 'TimePicker'
},{
    uri: 'tooltip',
    text: 'ToolTip'
},{
    uri: 'typehead',
    text: 'TypeHead'
}];
var module = angular.module("routeApp",["ui.router",'tm.pagination','ui.bootstrap']);
//路由配置
module.config(function($stateProvider, $urlRouterProvider){
    var index = 'index';
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
                templateUrl: 'views/list.html'
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
    }).state("accordion", {
        url: "/accordion",
        views: {
            '': {
                templateUrl: 'views/index.html'
            },
            'topbar@accordion' : {
                templateUrl: 'views/topbar.html'
            },
            'leftnav@accordion' : {
                templateUrl: 'views/leftnav.html'
            },
            'content@accordion' : {
                templateUrl: 'views/accordion.html'
            }
        }
    }).state("alert", {
        url: "/alert",
        views: {
            '': {
                templateUrl: 'views/index.html'
            },
            'topbar@alert': {
                templateUrl: 'views/topbar.html'
            },
            'leftnav@alert' : {
                templateUrl: 'views/leftnav.html'
            },
            'content@alert': {
                templateUrl: 'views/alert.html'
            }
        }
    }).state("datepicker",{
        url: "/datepicker",
        views: {
            '': {
                templateUrl: 'views/index.html'
            },
            'topbar@datepicker': {
                templateUrl: 'views/topbar.html'
            },
            'leftnav@datepicker': {
                templateUrl: 'views/leftnav.html'
            },
            'content@datepicker': {
                templateUrl: 'views/datepicker.html'
            }
        }
    }).state("buttons",{
        url: "/buttons",
        views: {
            '': {
                templateUrl: 'views/index.html'
            },
            'topbar@buttons': {
                templateUrl: 'views/topbar.html'
            },
            'leftnav@buttons': {
                templateUrl: 'views/leftnav.html'
            },
            'content@buttons': {
                templateUrl: 'views/buttons.html'
            }
        }
    }).state("carousel",{
        url: "/carousel",
        views: {
            '': {
                templateUrl: 'views/index.html'
            },
            'topbar@carousel': {
                templateUrl: 'views/topbar.html'
            },
            'leftnav@carousel': {
                templateUrl: 'views/leftnav.html'
            },
            'content@carousel': {
                templateUrl: 'views/carousel.html'
            }
        }
    }).state("collapse",{
        url: "/collapse",
        views: {
            '': {
                templateUrl: 'views/index.html'
            },
            'topbar@collapse': {
                templateUrl: 'views/topbar.html'
            },
            'leftnav@collapse': {
                templateUrl: 'views/leftnav.html'
            },
            'content@collapse': {
                templateUrl: 'views/collapse.html'
            }
        }
    }).state("dropdown",{
        url: "/dropdown",
        views: {
            '': {
                templateUrl: 'views/index.html'
            },
            'topbar@dropdown': {
                templateUrl: 'views/topbar.html'
            },
            'leftnav@dropdown': {
                templateUrl: 'views/leftnav.html'
            },
            'content@dropdown': {
                templateUrl: 'views/dropdown.html'
            }
        }
    });
    // $locationProvider.html5Mode(true);
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

