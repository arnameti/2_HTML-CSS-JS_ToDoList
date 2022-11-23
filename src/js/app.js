const App = class {
  toDoParentEl = document.querySelector('[data-todo]');
  inputEl = document.querySelector('[data-input]');

  _inputString;
  _toDoArray = [];

  getInputString(inputString) {
    this._inputString = inputString;
    console.log(this._inputString);
    this._clearInput();
    this._createToDoAndPushToArray();
  }

  _clearInput() {
    this.inputEl.value = '';
  }

  _createToDoAndPushToArray() {
    const toDo = {
      string: this._inputString,
      id: Date.now(),
    };

    this._toDoArray.push(toDo);
    console.log(this._toDoArray);
  }

  renderToDo() {
    let html = '';
    this._toDoArray.forEach(toDo => (html += this._markup(toDo)));

    this.toDoParentEl.innerHTML = '';
    this.toDoParentEl.insertAdjacentHTML('afterbegin', html);
  }

  _markup(toDo) {
    return `
      <li class="todo__item" data-todo='${toDo.id}'>
        <span class="todo__desc">${toDo.string}</span>
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
