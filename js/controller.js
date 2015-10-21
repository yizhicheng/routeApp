//控制器
module.controller("RouteListCtl", function($scope, ajaxService){
    console.log("RouteListCtl");
    ajaxService.ajaxFunc({
        url: '../data/account.json'
    }).then(function(data) {
        $scope.accounts = data;
        console.log(data);
    }, function(error) {
        console.log(error);
    });
});
module.controller("RouteDetailCtl", function($scope, $routeParams){
    console.log("RouteDetailCtl");
    console.log($routeParams);
});
// 左侧导航选中效果
module.controller("NavCtrl", function($scope,$location){
    // console.log($location.$$path);
    var getIndex = function (path){
        var index = 1;
        switch(path) {
            case '/list' : index = 1; break;
            case '/about' : index = 2; break;
            case '/form' : index =3; break;
        }
        return index;
    }
    $scope.selectIndex = getIndex($location.$$path);
    $scope.selected = function(index) {
        $scope.selectIndex = index;
    }
});

module.controller("LoginCtrl", function($scope, $location){
    $scope.submit = function () {
        //alert("登录失败");
        $location.path('/index')
    }
});
module.controller("AboutCtrl", function($scope){
    $scope.about = "关于我们";
});
module.controller("ListCtrl", function($scope){

});
module.controller("FormCtrl", function($scope){
    $scope.account = {
        name: 'qq',
        accountName: "qq",
        password: 'qq',
    };
    $scope.submit = function() {
        console.log($scope.account);
    };
    $scope.reset = function() {
        $scope.account = {
            name: "qqqqqqqq",
            accountName: "253921698",
            password: "qq"
        }
    }
});
module.controller("AddAccountCtrl", function($scope){
    $scope.account = {
        name: 'qq',
        accountName: '253921698',
        password: 'yizhicheng'
    };
    $scope.submit = function() {
        console.log($scope.account);
    };
})