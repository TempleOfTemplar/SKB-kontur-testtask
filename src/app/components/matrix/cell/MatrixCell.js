class MatrixCellController {
  constructor(sidebarStateService) {
    this.sidebarStateService = sidebarStateService;
    this.editing = this.editing || false;
  }

  handleBlur() {
    this.editing = false;
    this.sidebarStateService.setState('default');
  }

  handleSubmit(e) {
    if (e.keyCode === 13) {
      this.editing = false;
      e.target.blur();
    }
  }

  handleFocus() {
    this.editing = true;
    this.sidebarStateService.setState('editing');
  }

}

export const MatrixCell = {
  templateUrl: 'app/components/matrix/cell/MatrixCell.html',
  controller: MatrixCellController,
  bindings: {
    text: '=',
    litera: '<',
    rowIndex: '<',
    colIndex: '<'
  }
};

