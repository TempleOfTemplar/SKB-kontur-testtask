export class MatrixService {

  /**
   * Добавляет строку в матрицу.
   *
   * @param {Array} matrix Исходная матрица.
   */
  addRow(matrix) {
    if (matrix.length < 10) {
      matrix.push(new Array(matrix[0].length));
    }
  }

  /**
   * Добавляет столбец в матрицу.
   *
   * @param {Array} matrix Исходная матрица.
   */
  addCol(matrix) {
    if (matrix[0].length < 10) {
      for (let i = 0, l = matrix.length; i < l; i++) {
        matrix[i].push(undefined);
      }
    }
  }

  /**
   * Удаляет из матрицы последнюю строку.
   *
   * @param {Array} matrix Исходная матрица.
   */
  delRow(matrix) {
    if (matrix.length > 2) {
      matrix.pop();
    }
  }

  /**
   * Удаляет из матрицы последнюй столбец.
   *
   * @param {Array} matrix Исходная матрица.
   */
  delCol(matrix) {
    if (matrix[0].length > 2) {
      for (let i = 0, l = matrix.length; i < l; i++) {
        matrix[i].pop();
      }
    }
  }

  /**
   * Перемножает матрицы.
   *
   * @param {Array} matrixA Исходная матрица A.
   * @param {Array} matrixB Исходная матрица B.
   * @return {Array|undefined} Результат умножения матриы A B.
   */
  multiply(matrixA, matrixB) {
    if (!this.isMultuplyable(matrixA, matrixB)) { return }
    let rowsA = matrixA.length, colsA = matrixA[0].length,
      colsB = matrixB[0].length,
      result = [];
    for (let i = 0; i < rowsA; i++) {
      result[i] = [];
      for (let j = 0; j < colsB; j++) {
        let sum = 0;
        for (let k = 0; k < colsA; k++) {
          sum += matrixA[i][k] * matrixB[k][j];
        }
        result[i][j] = sum;
      }
    }
    return result;
  }

  /**
   * Проверяет возможность перемножения матриц.
   *
   * @param {Array} matrixA Исходная матрица A.
   * @param {Array} matrixB Исходная матрица B.
   * @return {Boolean} Возможно ли перемножение матриц.
   */
  isMultuplyable(matrixA, matrixB) {
    return (matrixA[0].length === matrixB.length);
  }

  /**
   * Возвращает размер итоговой матрицы для операции перемножения.
   *
   * @param {Array} matrixA Исходная матрица A.
   * @param {Array} matrixB Исходная матрица B.
   * @return {Object} {cols: количество колонок, rows: количество строк}.
   */
  getResultMatrixSize(matrixA, matrixB) {
    return {cols: matrixA[0].length, rows: matrixB.length};
  }

  /**
   * Очищает матрицу от значений.
   *
   * @param {Array} matrix Исходная матрица.
   */
  clear(matrix) {
    let rows = matrix.length, cols = matrix[0].length;
    matrix.length = 0;
    for (let i = 0, l = rows; i < l; i++) {
      matrix[i] = new Array(cols);
    }
  }

  /**
   * Возвращает пустую матрицу заданной размерности.
   *
   * @param {number} rows количество строк.
   * @param {number} cols количество колонок.
   * @return {Array} пустая матрица размерности rows * cols.
   */
  getDefault(rows, cols) {
    let t = new Array(rows);
    for (let i = 0; i < rows; i++) {
      t[i] = new Array(cols);
    }
    return t;
  }
}

