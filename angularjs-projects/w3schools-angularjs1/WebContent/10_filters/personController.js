"use strict";
var app = angular.module('myApp', []);
app.controller('personCtrl', function ($scope) {
    $scope.firstName = "Rajendar",
        $scope.lastName = "Jagapathi",
        $scope.fullName = function () {
            return $scope.firstName + " " + $scope.lastName;
        }
});
