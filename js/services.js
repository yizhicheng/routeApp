/**
 * 帐户服务
 * @param  {object} $q          推迟对象
 * @param  {Object} $http){                      var service [description]
 * @param  {function} addAccount: function()    {                                   var d [description]
 * @return {object}             服务对象
 */
module.factory('accountService', function($q, $http){
    return {
        /**
         * 获取账户列表
         * @return {[type]} [description]
         */
        accountList: function() {
            var d = $q.defer();
            $http.get("data/account.json")
            .success(function(data,status){
                d.resolve(data);
            }).error(function(data, status){
                d.reject(data);
            });
            return d.promise;
        },
        /**
         * 添加账户
         */
        addAccount: function() {
            var d = $q.defer();
            $http.get("data/add.json")
            .success(function(data, status) {
                d.resolve(data);
            }).error(function(data, status){
                d.reject(data);
            });
            return d.promise;
        }
    };
});