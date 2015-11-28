;
/**
 * 帐户服务
 * @param  {object} $q          推迟对象
 * @param  {Object} $http){                      var service [description]
 * @param  {function} addAccount: function()    {                                   var d [description]
 * @return {object}             服务对象
 */
'use strict';
module.factory('accountService', ['$q','$http',function($q, $http){
    var ajaxGet = function(url) {
        var d = $q.defer();
        $http.get(url).success(function(data){
            d.resolve(data);
        }).error(function(data){
            d.reject(data);
        });
        return d.promise;
    };
    return {
        /**
         * 获取账户列表
         * @return {[type]} [description]
         */
        accountList: function() {
            return ajaxGet("data/account.json");
        },
        /**
         * 添加账户
         */
        addAccount: function() {
            return ajaxGet("data/add.json");
        }
    };
}]);
/**
 * 常量服务 左侧导航
 * @type {String}
 */
module.constant('leftNav', [{
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
    uri: 'typeahead',
    text: 'TypeAhead'
},{
    uri: 'tree',
    text: '测试tree'
}]);