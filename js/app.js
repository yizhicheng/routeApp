// ;var siteConfig = {
//     "domain" : "http://10.0.2.89/"
// };
var module = angular.module("routeApp",["ui.router",'ui.bootstrap']);
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
    }).state("popover",{
        url: "/popover",
        views: {
            '': {
                templateUrl: 'views/index.html'
            },
            'topbar@popover': {
                templateUrl: 'views/topbar.html'
            },
            'leftnav@popover': {
                templateUrl: 'views/leftnav.html'
            },
            'content@popover': {
                templateUrl: 'views/popover.html'
            }
        }
    }).state("progressbar",{
        url: "/progressbar",
        views: {
            '': {
                templateUrl: 'views/index.html'
            },
            'topbar@progressbar': {
                templateUrl: 'views/topbar.html'
            },
            'leftnav@progressbar': {
                templateUrl: 'views/leftnav.html'
            },
            'content@progressbar': {
                templateUrl: 'views/progressbar.html'
            }
        }
    }).state("rating",{
        url: "/rating",
        views: {
            '': {
                templateUrl: 'views/index.html'
            },
            'topbar@rating': {
                templateUrl: 'views/topbar.html'
            },
            'leftnav@rating': {
                templateUrl: 'views/leftnav.html'
            },
            'content@rating': {
                templateUrl: 'views/rating.html'
            }
        }
    }).state("tabs",{
        url: "/tabs",
        views: {
            '': {
                templateUrl: 'views/index.html'
            },
            'topbar@tabs': {
                templateUrl: 'views/topbar.html'
            },
            'leftnav@tabs': {
                templateUrl: 'views/leftnav.html'
            },
            'content@tabs': {
                templateUrl: 'views/tabs.html'
            }
        }
    }).state("timepicker",{
        url: "/timepicker",
        views: {
            '': {
                templateUrl: 'views/index.html'
            },
            'topbar@timepicker': {
                templateUrl: 'views/topbar.html'
            },
            'leftnav@timepicker': {
                templateUrl: 'views/leftnav.html'
            },
            'content@timepicker': {
                templateUrl: 'views/timepicker.html'
            }
        }
    }).state("tooltip",{
        url: "/tooltip",
        views: {
            '': {
                templateUrl: 'views/index.html'
            },
            'topbar@tooltip': {
                templateUrl: 'views/topbar.html'
            },
            'leftnav@tooltip': {
                templateUrl: 'views/leftnav.html'
            },
            'content@tooltip': {
                templateUrl: 'views/tooltip.html'
            }
        }
    }).state("typeahead",{
        url: "/typeahead",
        views: {
            '': {
                templateUrl: 'views/index.html'
            },
            'topbar@typeahead': {
                templateUrl: 'views/topbar.html'
            },
            'leftnav@typeahead': {
                templateUrl: 'views/leftnav.html'
            },
            'content@typeahead': {
                templateUrl: 'views/typeahead.html'
            }
        }
    });
    // $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/login');
});