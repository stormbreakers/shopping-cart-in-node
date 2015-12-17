angular.module('loginService', [])

    // super simple service
    // each function returns a promise object
    .factory('loginSer',['$http',function ($http) {
        return {
            post: function (loginData) {
                return $http.post('/api/login', loginData);
            }
        }
    }]);