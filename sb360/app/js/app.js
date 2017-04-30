/// <reference path="C:\Users\prashant\documents\sb360\sb360\Scripts/angular.js" />

var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/dashboard/dashboard.html",
        controller: "DashboardController"
    })
    .when("/Namespaces", {
        templateUrl: "app/namespaces/namespaces.html",
        controller: "NamespacesController"
    })
    .when("/UserManagement", {
        templateUrl: "app/usermanagement/usermanagement.html",
        controller: "UserManagementController"
    })
    .when("/AccountDetails", {
        templateUrl: "app/account/accountdetails.html",
        controller: "AccountDetailsController"
    })
    .when("/Payment", {
        templateUrl: "app/payment/payment.html",
        controller: "PaymentController"
    })
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});

myApp.controller("DashboardController", function ($scope) {
    console.log("in dashboard")
    $scope.message = "I am is Dashboard View"
});
myApp.controller("NamespacesController", function ($scope) {
    console.log("namespaces")
    $scope.message = "I am is Namespace View"
});

myApp.controller("AccountDetailsController", function ($scope) {
    console.log("account")

    $scope.message = "I am is AccountDetails View"
});
myApp.controller("PaymentController", function ($scope) {
    console.log("payment")

    $scope.message = "I am is Payment View"
});