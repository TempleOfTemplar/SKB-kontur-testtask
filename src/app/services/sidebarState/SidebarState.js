let currentState = 'default';
let message = '';

export class SidebarStateService {

  /**
   * Возвращает текущее состояние.
   *
   * @return {string} текущее состояние.
   */
  getState() {
    return currentState;
  }

  /**
   * Возвращает текущее сообщение.
   *
   * @return {string} текущее сообщение.
   */
  getMessage() {
    return message;
  }

  /**
   * Меняет текущее состояние.
   *
   * @param {string} new_state Новое состояние.
   */
  setState(newState) {
    currentState = newState;
  }

  /**
   * Меняет текущее сообщение.
   *
   * @param {string} new_message Новое сообщение.
   */
  setMessage(new_message) {
    message = new_message;
  }
}
