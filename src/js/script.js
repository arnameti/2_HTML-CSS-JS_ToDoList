import app from './app';

const conctainerEL = document.querySelector('[data-container]');
const formEl = document.querySelector('[data-form]');
const inputEl = formEl.querySelector('[data-input]');

formEl.addEventListener('submit', function (e) {
  e.preventDefault();

  const inputString = inputEl.value;
  app.getAndSaveInputString(inputString);
  app.renderToDo();
});

conctainerEL.addEventListener('click', function (e) {
  const clicked = e.target.closest('[data-icon]');

  if (!clicked) return;

  if (clicked.dataset.icon === 'delete') {
    const listEl = clicked.closest('[data-todo]');
    const id = listEl.dataset.todo;

    app.getAndSaveId(id);
  }
});
