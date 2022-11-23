const App = class {
  conctainerEL = document.querySelector('[data-container]');
  formEl = document.querySelector('[data-form]');
  inputEl = document.querySelector('[data-input]');
  todoContainer = document.querySelector('[data-todo]');

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

  render() {}
};

export default new App();
