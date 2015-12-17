angular.module('loginController', [])
    .controller('login', ['$scope', 'loginSer', function ($scope, loginSer) {
        $scope.formData = {};
        $scope.checkUser = function () {
            loginSer.post($scope.formData)
                // if successful creation, call our get function to get all the new todos
                .success(function (data) {
                    $scope.formData = {}; // clear the form so our user is ready to enter another
                    $scope.user = data; // assign our new list of todos
                });
        };
    }]);