/// <reference path="C:\Users\prashant\documents\sb360\sb360\Scripts/angular.js" />

myApp.controller("UserManagementController", function ($scope, UserApi) {
    getuser();
    function getuser() {
        UserApi.getUsers()
           .then(function (response) {
               $scope.users = response.data;
               console.log($scope.users);
           })
            .catch(function (response) {
                console.error('Users error', response.status, response.data);
            })
            .finally(function () {
                console.log("finally finished Users");
            });
    };
        $scope.addUser = function () {
            var UserToAdd = {
                'FirstName': $scope.fname,
                'LastName': $scope.lname,
                'Email': $scope.email,
                'UserRole': $scope.userRole
            };
            UserApi.AddUser(UserToAdd)
            .then(function (response) {
                alert("user added");
                $scope.fname = undefined;
                $scope.lname = undefined;
                $scope.email = undefined;
                $scope.userRole = undefined;
                angular.element('#myModalHorizontal').modal('hide');
                getuser();
            })
            .catch(function (response) {
                console.error('Users error', response.status, response.data);
            })
            .finally(function () {
                console.log("finally finished Users");
            });
        };

        $scope.editUser = function (user) {
            console.log(user);
            $scope.myModal = true;
            $scope.fname = user.FirstName;
            $scope.lname = user.LastName;
            $scope.email = user.Email;
            $scope.userRole = user.UserRole;
            $scope.isEdit = true,
            $scope.Id = user.Id
        };
        $scope.updateUser = function () {
            var user = {
                'Id': $scope.Id,
                'FirstName': $scope.fname,
                'LastName': $scope.lname,
                'Email': $scope.email,
                'UserRole': $scope.userRole
            };
            console.log(user)
            UserApi.EditUser(user)
             .then(function (response) {
                 $scope.users = response.data;
                 console.log($scope.users);
                 $scope.fname = undefined;
                 $scope.lname = undefined;
                 $scope.email = undefined;
                 $scope.userRole = undefined;
                 angular.element('#myModalHorizontal').modal('hide');
                 getuser();
             })
            .catch(function (response) {
                console.error('Users error', response.status, response.data);
            })
            .finally(function () {
                console.log("finally finished Users");

            });
            getuser();
        };

        $scope.deleteUser = function (user) {
            UserApi.DeleteUser(user)
             .then(function (response) {
                 $scope.users = response.data;
                 console.log($scope.users);
                 getuser();
             })
            .catch(function (response) {
                console.error('Users error', response.status, response.data);
            })
            .finally(function () {
                console.log("finally finished Users");
            });
            getuser();
        };
});