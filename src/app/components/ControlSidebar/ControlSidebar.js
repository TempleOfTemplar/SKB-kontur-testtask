class ControlSidebarController {
  /** @ngInject */
  constructor(sidebarStateService) {
    this.sidebarStateService = sidebarStateService;
    this.getState = this.sidebarStateService.getState;
    this.getMessage = this.sidebarStateService.getMessage;
    this.selectedMatrix = "matrixA";
  }

  handleAddRow() {
    this.onAddRow({matrix: this.selectedMatrix});
  }

  handleDelRow() {
    this.onDelRow({matrix: this.selectedMatrix});
  }

  handleAddCol() {
    this.onAddCol({matrix: this.selectedMatrix});
  }

  handleDelCol() {
    this.onDelCol({matrix: this.selectedMatrix});
  }
}

export const ControlSidebar = {
  templateUrl: 'app/components/ControlSidebar/ControlSidebar.html',
  controller: ControlSidebarController,
  bindings: {
    onMultiply: '&',
    onClear: '&',
    onSwap: '&',
    onAddRow: '&',
    onDelRow: '&',
    onAddCol: '&',
    onDelCol: '&'
  }
};

