'use strict';

fdescribe('PaginationCtrl', function () {
  var scope;
  beforeEach(function () {
    module('ngYoApp');

    inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();

      $controller('PaginationCtrl', {
        $scope: scope
      });
    });
  });

  it('should_have_pages', function () {
    expect(scope.pages).toEqual([1, 2, 3, 4, 5]);
  });

  it('should_verify_first_page', function () {
    scope.currentPage = 0;
    expect(scope.isFirstPage()).toBe(true);

    scope.currentPage = 1;
    expect(scope.isFirstPage()).toBe(false);
  });

  it('should_verify_last_page', function () {
    scope.currentPage = 4;
    expect(scope.isLastPage()).toBe(true);

    scope.currentPage = 3;
    expect(scope.isLastPage()).toBe(false);
  });

  it('should_verify_selected_page', function () {
    scope.currentPage = 2;
    expect(scope.isSelected(2)).toBe(true);

    scope.currentPage = 3;
    expect(scope.isSelected(2)).toBe(false);
  });

  it('should_go_to_next_page', function () {
    scope.currentPage = 2;
    scope.next();
    expect(scope.currentPage).toEqual(3);
  });

  it('should_go_to_previous_page', function () {
    scope.currentPage = 2;
    scope.previous();
    expect(scope.currentPage).toEqual(1);
  });
});
