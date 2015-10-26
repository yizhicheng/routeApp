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
    $scope.navs = leftNav;
    $scope.currentUri = $location.$$path.split('/')[1];
    $scope.selected = function() {
        $scope.currentUri = $location.$$path.split('/')[1];
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
module.controller('AlertCtrl', ['$scope', function($scope){
    $scope.alerts = [{ type: 'danger', msg: 'danger.' },
    { type: 'success', msg: 'success.' },
    {type: 'info', msg: 'info'}];
    $scope.addAlert = function () {
        $scope.alerts.push({"msg": "Alert test",type: 'warning'});
    };
    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1)
    };
}]);
//日期选择器
module.controller('DatepickerDemoCtrl', ['$scope', function($scope){
    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();
    $scope.clear = function() {
        $scope.dt = null;
    };
    $scope.disabled = function(date, mode) {
        return (mode==='day' && (date.getDay()===0 || date.getDay === 6));
    };
    $scope.toggleMin =  function() {
        $scope.minDate = $scope.minDate ? null :new Date();
    };
    $scope.toggleMin();
    $scope.maxDate = new Date(2020,5,22);
    $scope.open = function($event) {
        $scope.status.opened = true;
    };
    $scope.setDate = function(year, month, day) {
        $scope.dt = new Date(year, month, day);
        console.log("setDate");
    };
    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[1];

    $scope.status = {
        opened: false
    };
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 2);
    $scope.events =
    [
        {
            date: tomorrow,
            status: 'full'
        },
        {
            date: afterTomorrow,
            status: 'partially'
        }
    ];

    $scope.getDayClass = function(date, mode) {
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0,0,0,0);

            for (var i=0;i<$scope.events.length;i++){
                var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }

        return '';
    };
    $scope.submit = function () {
        console.log($scope.dt);
    }
}]);
//Buttons 控制器
module.controller('ButtonsCtrl', ['$scope', function($scope){
    $scope.singleModel = 0;
    $scope.radionModel = "Middle";
    $scope.checkModel = {
        left: false,
        middle: true,
        right: false
    };
    $scope.checkResults = [];
    $scope.$watchCollection('checkModel', function () {
        $scope.checkResults = [];
        angular.forEach($scope.checkModel, function (value, key) {
            if (value) {
                $scope.checkResults.push(key);
            }
        });
    });
}]);
//CarouseCtrl控制器
module.controller('CarouseCtrl', ['$scope', function($scope){
    $scope.myInterval = 3000;
    $scope.noWrapSlides = false;
    var slides = $scope.slides = [{
        image: "../images/1.jpg",
        text: "第一张"
    }, {
        image: "../images/2.jpg",
        text: "第二张"
    },{
        image: "../images/3.jpg",
        text: "第三张"
    }];

}]);
//CollapseCtrl控制器
module.controller('CollapseCtrl', ['$scope', function($scope){
    $scope.isCollapsed = false;
}]);
//下拉列表控制器
module.controller('DropDownCtrl', ['$scope', function($scope){
    $scope.items = [
        "第一条",
        "第二条",
        "第三条"
    ];
    $scope.status = {
        isopen: false
    };
    $scope.toggled = function(open) {
        console.log(open);
    };
}]);