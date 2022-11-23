import app from './app';

const conctainerEL = document.querySelector('[data-container]');
const formEl = document.querySelector('[data-form]');
const inputEl = formEl.querySelector('[data-input]');
const todoContainer = document.querySelector('[data-todo]');

conctainerEL.addEventListener('click', function () {});

formEl.addEventListener('submit', function (e) {
  e.preventDefault();

  const inputString = inputEl.value;
  app.getInputString(inputString);
});
