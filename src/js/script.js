import app from './app';

const conctainerEL = document.querySelector('[data-container]');
const formEl = document.querySelector('[data-form]');
const inputEl = formEl.querySelector('[data-input]');
const lockOverlayEl = document.querySelector('[data-lock-overlay]');

formEl.addEventListener('submit', function (e) {
  e.preventDefault();

  const inputString = inputEl.value;
  app.getAndSaveInputString(inputString);
  app.renderToDos();
});

conctainerEL.addEventListener('click', function (e) {
  const clicked = e.target.closest('[data-icon]');

  if (!clicked) return;

  if (clicked.dataset.icon === 'delete') {
    const listEl = clicked.closest('[data-todo]');
    const id = +listEl.dataset.todo;

    app.getAndSaveId(id);
    app.deleteToDoElement();
    app.renderToDos();
  }

  if (clicked.dataset.icon === 'update') {
    lockOverlayEl.dataset.lockOverlay = 'visible';
  }
});

window.addEventListener('keyup', function (e) {
  e.preventDefault();

  if (e.key !== 'Escape') return;

  if ((lockOverlayEl.dataset.lockOverlay = 'visible')) {
    lockOverlayEl.dataset.lockOverlay = 'invisible';
  }
});
