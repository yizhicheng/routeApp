//控制器
/**
 * [账户列表控制器]
 * @param  {[object]} $scope          [作用域对象]
 * @param  {[object]} ajaxService     [promise对象]
 * @param  {[object]} function)       [description]
 * @param  {[object]} function}       [description]
 * @return {[无]}                     [description]
 */
module.controller("RouteListCtl", function($scope,$uibModal, accountService){
    $scope.currentPage = 1;
    $scope.itemsPerPage = 5;
    // 重新获取数据条目
    var getAccountList = function() {
        accountService.accountList().then(function(data){
            $scope.totalItems = data.items.length;
            var start = ($scope.currentPage -1 )* $scope.itemsPerPage;
            var end = ($scope.currentPage-1)* $scope.itemsPerPage + $scope.itemsPerPage;
            $scope.accounts = data.items.slice(start, end);
        });       
    };
    getAccountList();
    $scope.pageChanged = function() {
        getAccountList();
    };
    $scope.showAddForm = function(size) {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/addForm.html',
            controller: 'ModalInstanceCtrl',
            size: size
        })
    }
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
            case '/accordion' : index = 4; break;
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
// module.controller("AddAccountCtrl", function($scope, accountService,$modalInstance){
//     $scope.account = {
//         name: 'qq',
//         accountName: '253921698',
//         password: 'yizhicheng'
//     };
//     $scope.ok = function() {
//         console.log("ok");
//         $modalInstance.close();
//     };
//     $scope.cancel = function() {
//         console.log('cancel');
//         $modalInstance.dismiss('cancel');
//     };
//     $scope.submit = function() {
//         accountService.addAccount().then(function(data){
//             alert(data.msg);
//             //console.log(data+"right");
//         }, function(reason){
//             alert("错误");
//             // console.log(reason+"error");
//         });
//     };
// });
module.controller('AccordionListCtrl', ['$scope', function($scope){
    $scope.oneAtATime = true;
    $scope.groups = [{
        title: "这是手风琴效果头部",
        content: "这是手风琴内容部分"
    }, {
        title: "手风琴头部2",
        content: "这是手风琴内容部分2"
    }];
    $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
    }
}]);
module.controller('ModalInstanceCtrl', function ($scope, $modalInstance) {
    $scope.account = {
        name: 'qq',
        accountName: '253921698',
        password: 'yizhicheng'
    };
    $scope.ok = function () {
        $modalInstance.close();
    };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});