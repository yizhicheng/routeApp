/**
 * [发送ajax请求]
 * @param  {[type]} $http        [发送ajax请求]
 * @param  {[type]} $q){                                     var    deferred [description]
 * @param  {[type]} responseType :             params.type || 'json'                                 }).success(function(data){               deferred.resolve(data);            }).error(function(reason){               deferred.reject(reason);            });            return deferred.promise;        }    };} [description]
 * @return {[type]}              [promise对象]
 */
module.factory('accountService', function($http,$q){
    var deferred = $q.defer();
    return {
        ajaxFunc: function (params) {
            $http({
               method : params.method || 'get',
               url : params.url || '',
               data : params. data || {},
               responseType : params.type || 'json'
            }).success(function(data){
               deferred.resolve(data);
            }).error(function(reason){
               deferred.reject(reason);
            });
            return deferred.promise;
        }
    };
});