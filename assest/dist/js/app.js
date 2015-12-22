var main = angular.module('ShoppingCart', ['ngRoute', 'Main']);
var cart = angular.module('Cart', ['ngRoute', 'Cart-main']);
var shop = angular.module('Shop', ['ngRoute', 'Shop-main']);
var product = angular.module('Product', ['ngRoute', 'Product-main']);
var check = angular.module('Checkout', ['ngRoute', 'Check-main']);

main.controller('dctrl', function ($scope) {
    $scope.url = window.location.href;
    $scope.link = $scope.url.substr($scope.url.indexOf('/', 15), $scope.url.length); // /link1 OR /link2 OR /link3
    $scope.select = function (item) {
        $scope.selected = item;
    };
    $scope.isActive = function (item) {
        return $scope.selected === item;
    };
    $scope.select($scope.link);
});

cart.controller('dctrl', function ($scope) {
    $scope.url = window.location.href;
    $scope.link = $scope.url.substr($scope.url.indexOf('/', 15), $scope.url.length); // /link1 OR /link2 OR /link3
    $scope.select = function (item) {
        $scope.selected = item;
    };
    $scope.isActive = function (item) {
        return $scope.selected === item;
    };
    $scope.select($scope.link);
});

shop.controller('dctrl', function ($scope) {
    $scope.url = window.location.href;
    $scope.link = $scope.url.substr($scope.url.indexOf('/', 15), $scope.url.length); // /link1 OR /link2 OR /link3
    $scope.select = function (item) {
        $scope.selected = item;
    };
    $scope.isActive = function (item) {
        return $scope.selected === item;
    };
    $scope.select($scope.link);
});

product.controller('dctrl', function ($scope) {
    $scope.url = window.location.href;
    $scope.link = $scope.url.substr($scope.url.indexOf('/', 15), $scope.url.length); // /link1 OR /link2 OR /link3
    $scope.select = function (item) {
        $scope.selected = item;
    };
    $scope.isActive = function (item) {
        return $scope.selected === item;
    };
    $scope.select($scope.link);
});

check.controller('dctrl', function ($scope) {
    $scope.url = window.location.href;
    $scope.link = $scope.url.substr($scope.url.indexOf('/', 15), $scope.url.length); // /link1 OR /link2 OR /link3
    $scope.select = function (item) {
        $scope.selected = item;
    };
    $scope.isActive = function (item) {
        return $scope.selected === item;
    };
    $scope.select($scope.link);
});

main.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: '/main'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);