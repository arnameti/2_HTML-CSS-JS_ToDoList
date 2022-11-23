const App = class {
  toDoParentEl = document.querySelector('[data-todo]');
  inputEl = document.querySelector('[data-input]');

  _inputString;
  _inputStringArray = [];

  getInputString(inputString) {
    this._inputString = inputString;
    console.log(this._inputString);
    this._clearInput();
    this._pushStringToArray();
  }

  _clearInput() {
    this.inputEl.value = '';
  }

  _pushStringToArray() {
    this._inputStringArray.push(this._inputString);
    console.log(this._inputStringArray);
  }

  renderToDo() {
    let html = '';
    this._inputStringArray.forEach(string => (html += this._markup(string)));

    this.toDoParentEl.innerHTML = '';
    this.toDoParentEl.insertAdjacentHTML('afterbegin', html);
  }

  _markup(string) {
    return `
      <li class="todo__item" data-todo>
        <span class="todo__desc">${string}</span>
        <!-- prettier-ignore -->
        <div class="todo__icons">
          <a href="#" data-btn='check'>
            <i class="fa-regular fa-circle-check todo__icon todo__icon--check"></i>
          </a>
          <a href="#" data-btn='update'>
            <i class="fa-regular fa-pen-to-square todo__icon todo__icon--update"></i>
          </a>
          <a href="#" data-btn='close'>
            <i class="fa-regular fa-circle-xmark todo__icon todo__icon--close"></i>
          </a>   
        </div>
      </li>
    `;
  }
};

export default new App();
