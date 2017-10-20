var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.red = 255;
    $scope.green = 255;
    $scope.blue = 255;
    $scope.redtext = "White";
    $scope.greentext = "White";
    $scope.bluetext = "White";
    $scope.redborder = 0;
    $scope.greenborder = 0;
    $scope.blueborder = 0;
    $scope.redbordertext = "White";
    $scope.greenbordertext = "White";
    $scope.bluebordertext = "White";
    $scope.mixedtext = "Black";
});