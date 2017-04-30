/// <reference path="C:\Users\prashant\documents\sb360\sb360\Scripts/angular.js" />

myApp.factory("UserApi", function ($http) {
    var baseUri = "http://sb360.azurewebsites.net/api";
    var UserApi = {};

    UserApi.getUsers = function () {
        return $http.get(baseUri + "/users");


    };
    UserApi.AddUser = function (user) {
        return $http.post(baseUri + '/users/', user);
    }
    UserApi.EditUser = function (user) {
        return $http.put(baseUri + "/users/" + user.Id, user);
    }
    UserApi.DeleteUser = function (user) {
        return $http.delete(baseUri + "/users/" + user.Id);
    }
    UserApi.getSpecificUser = function (user) {
        var abc = $http.get(baseUri + "/users/" + user.Id);
        return abc;
    };
    return UserApi;
});