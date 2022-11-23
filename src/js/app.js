const App = class {
  conctainerEL = document.querySelector('[data-container]');
  formEl = document.querySelector('[data-form]');
  inputEl = document.querySelector('[data-input]');
  todoContainer = document.querySelector('[data-todo]');

  _inputString;

  render() {}

  getInputString(inputString) {
    this._inputString = inputString;
    console.log(this._inputString);
    this.clearInput();
  }

  clearInput() {
    this.inputEl.value = '';
  }
};

export default new App();
