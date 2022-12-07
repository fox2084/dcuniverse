// Angular js 
var app = angular.module("myapp", ['ngMessages']);

app.run(function ($rootScope, $window, $location) {
    // create Array object carts when run page
    $rootScope.carts = ($window.localStorage.getItem("carts") != null) ? JSON.parse($window.localStorage.getItem("carts")) : [];
    $window.localStorage.setItem("carts", JSON.stringify($rootScope.carts));

    // Total product and total price
    $rootScope.totalProduct = 0;
    $rootScope.totalPrice = 0;
    $rootScope.carts.forEach(element => {
        $rootScope.totalProduct += element.quantity;
        $rootScope.totalPrice += parseFloat(element.quantity) * parseFloat(element.price);
    });

    // Format Number
    $rootScope.FormatNumber = function (num) {
        return new Intl.NumberFormat('vi-VN').format(num);
    }
});