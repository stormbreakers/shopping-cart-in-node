angular.module('Main', [])
    .controller('mainController', ['$scope', '$http', function ($scope, $http) {
        $scope.Index = function () {
            $http.get('/').success(function (data) {
                console.log(data);
            });
        };
        $scope.Cart = function () {
            $http.get('/Cart').success(function (data) {
                console.log(data);
            });
        };
        $scope.Shop = function () {
            $http.get('/Shop').success(function (data) {
                console.log(data);
            });
        };
        $scope.Checkout = function () {
            $http.get('/Checkout').success(function (data) {
                console.log(data);
            });
        };
        $scope.Product = function () {
            $http.get('/Product').success(function (data) {
                console.log(data);
            });
        };
    }]);
