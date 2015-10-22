//控制器
module.controller("RouteListCtl", function($scope, ajaxService, $http){
    console.log("RouteListCtl");
    // 重新获取数据条目
    var reGetProducts = function(){
        // 发送给后台的请求数据
        var postData = {
            currentPage: $scope.paginationConf.currentPage,
            itemsPerPage: $scope.paginationConf.itemsPerPage
        };
        ajaxService.ajaxFunc({
            url: siteConfig.domain+'/json1/index.php',
            method: 'jsonp'
        }).then(function(data) {
            $scope.paginationConf.totalItems = data.items.length;
            var start = (postData.currentPage-1)*postData.itemsPerPage;
            var end = (postData.currentPage-1)*postData.itemsPerPage + postData.itemsPerPage;
            $scope.accounts = data.items.slice(start, end);
        }, function(error) {
            console.log(error);
        });
    };
    $scope.paginationConf = {
        currentPage: 1,
        itemsPerPage: 6
    };
    $scope.$watch('paginationConf.currentPage + paginationConf.itemsPerPage', reGetProducts);
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