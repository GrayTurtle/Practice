var app = angular.module("myShoppingList",[]);
app.controller("myCtrl", function($scope) {
    $scope.products = ["milk","bread","cheese"];
    $scope.addItem = function() {
        $scope.products.push($scope.item);
    }
    $scope.removeItem = function (index) {
        $scope.products.splice(index, 1);
    }
});