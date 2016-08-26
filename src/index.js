import angular from 'angular';

import {MatrixService} from './app/services/matrix/matrix';
import {SidebarStateService} from './app/services/sidebarState/SidebarState';

import {App} from './app/containers/App';

import {ControlSidebar} from './app/components/ControlSidebar/ControlSidebar';
import {MatrixCell} from './app/components/matrix/cell/MatrixCell';
import {MatrixTable} from './app/components/matrix/table/MatrixTable';

import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';

angular
  .module('app', ['ui.router'])
  .config(routesConfig)

  .service('matrixService', MatrixService)
  .service('sidebarStateService', SidebarStateService)

  .component('app', App)
  .component('controlSidebarComponent', ControlSidebar)
  .component('matrixCellComponent', MatrixCell)
  .component('matrixTableComponent', MatrixTable);
