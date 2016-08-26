import angular from 'angular';
import 'angular-mocks';
import {controlSidebar} from './ControlSidebar';

describe('controlSidebar component', () => {
  beforeEach(() => {
    angular
      .module('controlSidebar', ['app/components/ControlSidebar/ControlSidebar.html'])
      .component('controlSidebar', controlSidebar);
    angular.mock.module('controlSidebar');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<controlSidebar></controlSidebar>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
