import angular from 'angular';
import 'angular-mocks';
import {matrixCell} from './MatrixCell';

describe('matrixCell component', () => {
  beforeEach(() => {
    angular
      .module('matrixCell', ['app/components/matrix/cell/MatrixCell.html'])
      .component('matrixCell', matrixCell);
    angular.mock.module('matrixCell');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<matrixCell></matrixCell>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
