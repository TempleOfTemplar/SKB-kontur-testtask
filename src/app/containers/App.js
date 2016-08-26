class AppController {
  /** @ngInject */
  constructor(matrixService, sidebarStateService) {
    this.sidebarStateService = sidebarStateService;
    this.matrixService = matrixService;
    this.matrixA = matrixService.getDefault(3, 3);
    this.matrixB = matrixService.getDefault(3, 3);
    this.matrixC = matrixService.getDefault(3, 3);
  }

  handleMultiply() {
    let res = this.matrixService.multiply(this.matrixA, this.matrixB);
    if (res) {
      this.sidebarStateService.setState('default');
      this.sidebarStateService.setMessage('');
      this.matrixC = res;
    } else {
      this.sidebarStateService.setState('error');
      this.sidebarStateService.setMessage('Такие матрицы нельзя перемножить, так как количество столбцов матрицы A не равно количеству строк матрицы B');
    }
  }

  handleClear() {
    this.matrixService.clear(this.matrixA);
    this.matrixService.clear(this.matrixB);
    this.matrixService.clear(this.matrixC);
  }

  handleSwap() {
    let t = this.matrixA;
    this.matrixA = this.matrixB;
    this.matrixB = t;
  }

  handleAddRow(matrix) {
    this.matrixService.addRow(this[matrix]);
    this.matrixC = this.recalculateResultMatrix();
  }

  handleDelRow(matrix) {
    this.matrixService.delRow(this[matrix]);
    this.matrixC = this.recalculateResultMatrix();
  }

  handleAddCol(matrix) {
    this.matrixService.addCol(this[matrix]);
    this.matrixC = this.recalculateResultMatrix();
  }

  handleDelCol(matrix) {
    this.matrixService.delCol(this[matrix]);
    this.matrixC = this.recalculateResultMatrix();
  }

  recalculateResultMatrix() {
    let resultMatrixSize = this.matrixService.getResultMatrixSize(this.matrixA, this.matrixB);
    return this.matrixService.getDefault(resultMatrixSize.rows, resultMatrixSize.cols);
  }

}

export const App = {
  template: require('./App.html'),
  controller: AppController
};
