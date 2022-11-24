const App = class {
  toDoParentEl = document.querySelector('[data-todo]');
  inputEl = document.querySelector('[data-input]');

  _inputString;
  _toDoArray = [];
  _id;
  _idToDelete;

  getAndSaveInputString(inputString) {
    this._inputString = inputString;
    this._clearInput();
    this._createToDoAndPushToArray();
    this.setArrayToLocalStorage();
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
  }

  setArrayToLocalStorage() {
    window.localStorage.setItem('toDos', JSON.stringify(this._toDoArray));
  }

  renderToDos() {
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
          <a href="#" data-icon='check'>
            <i class="fa-regular fa-circle-check todo__icon todo__icon--check"></i>
          </a>
          <a href="#" data-icon='update'>
            <i class="fa-regular fa-pen-to-square todo__icon todo__icon--update"></i>
          </a>
          <a href="#" data-icon='delete'>
            <i class="fa-regular fa-circle-xmark todo__icon todo__icon--close"></i>
          </a>   
        </div>
      </li>
    `;
  }

  deleteToDoElement() {
    this.findIndex();
    this._toDoArray.splice(this._idToDelete, 1);
  }

  getAndSaveId(id) {
    this._id = id;
  }

  findIndex() {
    this._idToDelete = this._toDoArray.findIndex(todo => todo.id === this._id);
  }
};

export default new App();
