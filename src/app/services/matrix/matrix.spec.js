import angular from 'angular';
import 'angular-mocks';
import Matrix from './matrix';

describe('Matrix service', () => {
  beforeEach(() => {
    angular
      .module('Matrix', [])
      .service('Matrix', Matrix);
    angular.mock.module('Matrix');
  });

  it('should', angular.mock.inject(Matrix => {
    expect(Matrix.getData()).toEqual(3);
  }));
});
