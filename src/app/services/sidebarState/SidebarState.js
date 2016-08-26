var current_state = 'default',
  message = '';

export class SidebarStateService {

  /**
   * Возвращает текущее состояние.
   *
   * @return {string} текущее состояние.
   */
  getState() {
    return current_state;
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
  setState(new_state) {
    current_state = new_state;
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


