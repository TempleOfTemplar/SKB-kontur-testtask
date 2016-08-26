import angular from 'angular';
import 'angular-mocks';
import {matrixTable} from './MatrixTable';

describe('matrixTable component', () => {
  beforeEach(() => {
    angular
      .module('matrixTable', ['app/components/matrix/table/MatrixTable.html'])
      .component('matrixTable', matrixTable);
    angular.mock.module('matrixTable');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<matrixTable></matrixTable>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
