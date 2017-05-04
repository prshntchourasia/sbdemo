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

myApp.controller("DashboardController", function ($scope, $location) {
    $scope.path = $location.path();
    //checkUrl(upath);
    console.log("in dashboard")
    $scope.message = "I am is Dashboard View"
});
myApp.controller("NamespacesController", function ($scope, $location) {
    $scope.path = $location.path();
    //checkUrl(upath);
    console.log("namespaces")
    $scope.message = "I am is Namespace View"
});

myApp.controller("AccountDetailsController", function ($scope, $location) {
    console.log("account")
    $scope.path = $location.path();
    //checkUrl(upath);
    $scope.message = "I am is AccountDetails View"
});
myApp.controller("PaymentController", function ($scope, $location) {
    console.log("payment")
    $scope.path = $location.path();
    //checkUrl(upath);
    $scope.message = "I am is Payment View"
});

//function checkUrl(path) {
//    console.log(path)
//    var preselected = angular.element(document.getElementsByClassName(".active"));
//    preselected.removeClass('active');
//    id = path == "/" ? "#dashboard" : path == "/Namespaces" ? "#namespaces" : path == "/UserManagement" ? "user" : path == "/AccountDetails" ? "#account" : "#payment";
//    console.log(id);
//    var myElement = angular.element( document.querySelector(id) );
//    myElement.addClass('active');

//}