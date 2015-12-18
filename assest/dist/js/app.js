var main = angular.module('ShoppingCart', ['ngRoute', 'Main']);

main.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: '../../app/views/header.html',
            controller: 'Cart'
        }).
        when('/Cart', {
            templateUrl: '../../app/views/header.html',
            controller: 'Cart'
        }).
        when('/Shop', {
            templateUrl: '',
            controller: 'Shop'
        }).
        when('/Checkout', {
            templateUrl: '',
            controller: 'Checkout'
        }).
        when('/Product', {
            templateUrl: '',
            controller: 'Product'
        })
    }]);