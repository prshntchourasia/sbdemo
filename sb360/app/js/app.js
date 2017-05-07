/// <reference path="C:\Users\prashant\documents\sb360\sb360\Scripts/angular.js" />

var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when("/Dashboard", {
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

myApp.controller("DashboardController", function ($scope, $location, UserApi) {
    getuser();
    function getuser() {
        UserApi.getUsers()
           .then(function (response) {
               $scope.users = response.data;
           })
            .catch(function (response) {
                console.error('Users error', response.status, response.data);
            })
            .finally(function () {
                console.log("finally finished Users");
            });
    }
    //checkUrl(upath);
});
myApp.controller("NamespacesController", function ($scope, $location) {
    $scope.path = $location.path();
    //checkUrl(upath);
    $scope.message = "I am is Namespace View"
});

myApp.controller("AccountDetailsController", function ($scope, $location) {
    $scope.path = $location.path();
    //checkUrl(upath);
    $scope.message = "I am is AccountDetails View"
});
myApp.controller("PaymentController", function ($scope, $location) {
   
    $scope.path = $location.path();
    //checkUrl(upath);
    $scope.message = "I am is Payment View"
});

myApp.run(function ($rootScope, $location, $anchorScroll) {
    $rootScope.getClass = function (path) {
        current_path = $location.path().substr(0, path.length);
            return ($location.path().substr(0, path.length) === path) ? 'active' : '';
    }
    //$rootScope.rightbox = false;
    //$rootScope.shiftScroll = function () {
    //        // set the location.hash to the id of
    //        // the element you wish to scroll to.
    //    $location.hash('announcements');
    //    $rootScope.rightbox = true;
    //        console.log($rootScope.rightbox)
    //        // call $anchorScroll()
    //        $anchorScroll();
    //}
});


//myApp.directive('autoActive', ['$location', function ($location) {
//    return {
//        restrict: 'A',
//        scope: false,
//        link: function (scope, element) {
//            function setActive() {
//                var path = $location.path();
//                if (path) {

//                    angular.forEach(element.find('div'), function (div) {
//                        var anchor = div.querySelector('a');
//                        if (anchor.href.match('/' + path + '(?=\\?|$)')) {
//                            angular.element(div).addClass('active');
//                        } else {
//                            angular.element(div).removeClass('active');
//                        }
//                    });
//                }
//            }

//            setActive();

//            scope.$on('$locationChangeSuccess', setActive);
//        }
//    }
//}]);
//myApp.factory('urlService', function ($scope, $location) {
//    $scope = $scope.$parent
//    $scope.getClass = function (path) {
//       console.log(path);
//       console.log($location.path().substr(0, path.length));
//       return ($location.path().substr(0, path.length) === path) ? 'active' : '';
//    }
    
//})
//$scope.getClass = function (path) {
//    console.log(path);
//    console.log($location.path().substr(0, path.length));
//    return ($location.path().substr(0, path.length) === path) ? 'active' : '';
//}

//function checkurl(path) {
//    console.log(path)
//    var preselected = angular.element(document.getelementsbyclassname(".active"));
//    preselected.removeclass('active');
//    id = path == "/" ? "#dashboard" : path == "/namespaces" ? "#namespaces" : path == "/usermanagement" ? "user" : path == "/accountdetails" ? "#account" : "#payment";
//    console.log(id);
//    var myelement = angular.element( document.queryselector(id) );
//    myelement.addclass('active');

//}