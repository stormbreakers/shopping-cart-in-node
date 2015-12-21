var main = angular.module('ShoppingCart', ['ngRoute', 'Main']);
var cart = angular.module('Cart', ['ngRoute', 'Cart-main']);
var shop = angular.module('Shop', ['ngRoute', 'Shop-main']);
var product = angular.module('Product', ['ngRoute', 'Product-main']);
var check = angular.module('Checkout', ['ngRoute', 'Check-main']);

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
