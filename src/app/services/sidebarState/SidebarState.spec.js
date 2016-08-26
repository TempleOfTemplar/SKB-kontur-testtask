import angular from 'angular';
import 'angular-mocks';
import SidebarState from './SidebarState';

describe('SidebarState service', () => {
  beforeEach(() => {
    angular
      .module('SidebarStateService', [])
      .service('SidebarStateService', SidebarStateService);
    angular.mock.module('SidebarStateService');
  });

  it('should', angular.mock.inject(SidebarStateService => {
    expect(SidebarStateService.getData()).toEqual(3);
  }));
});
