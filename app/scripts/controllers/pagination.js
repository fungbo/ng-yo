'use strict';

angular.module('ngYoApp')
  .controller('PaginationCtrl', ['$scope', function ($scope) {
    $scope.title = 'Pagination';
    $scope.pages = [1, 2, 3, 4, 5];

    $scope.currentPage = 0;

    $scope.pageTo = function (index) {
      $scope.currentPage = index;
    };

    $scope.isFirstPage = function () {
      return $scope.currentPage === 0;
    };

    $scope.isLastPage = function () {
      return $scope.currentPage === $scope.pages.length - 1;
    };

    $scope.isSelected = function (index) {
      return $scope.currentPage === index;
    };

    $scope.previous = function () {
      $scope.currentPage = $scope.currentPage - 1;
    };

    $scope.next = function () {
      $scope.currentPage = $scope.currentPage + 1;
    };
  }]);
