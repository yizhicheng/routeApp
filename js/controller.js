//控制器
module.controller("RouteListCtl", function($scope, accountService){
    console.log("RouteListCtl");
    accountService.ajaxFunc({
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
    $scope.selectIndex = getIndex($location.$$path);
    $scope.selected = function(index) {
        $scope.selectIndex = index;
    }
});
function getIndex(path){
    var index = 1;
    switch(path) {
        case '/list' : index = 1; break;
        case '/about' : index = 2; break;
    }
    return index;
}