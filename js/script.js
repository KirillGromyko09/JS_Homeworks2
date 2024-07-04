'use strict'
(function () {
  const TODO_ITEMS = 'todo-items';
  const TODO_ITEMS_FAVORITE = 'todo-items-favorite';
  const form = document.querySelector('#todoForm');
  const todoItemContainer = document.querySelector('#todoItems');
  const favoriteItemContainer = document.querySelector('#favoriteItems');
  const removeAllBtn = document.querySelector('[data-remove-all]');
  let currentId = 1;

  const getData = () => {
    const data = JSON.parse(localStorage.getItem(TODO_ITEMS));
    return data || [];
  };

  const getDataFavorite = () => {
    const data = JSON.parse(localStorage.getItem(TODO_ITEMS_FAVORITE));
    return data || [];
  };

  const saveTodoItem = (data) => {
    const dataToSave = structuredClone(data);
    const savedData = getData();
    dataToSave.id = currentId;
    currentId++;
    savedData.push(dataToSave);
    localStorage.setItem(TODO_ITEMS, JSON.stringify(savedData));

    const dataFromLS = getData();
    return dataFromLS[dataFromLS.length - 1];
  };

  const saveFavoriteItem = (item) => {
    const savedDataFavorite = getDataFavorite();
    savedDataFavorite.push(item);
    localStorage.setItem(TODO_ITEMS_FAVORITE, JSON.stringify(savedDataFavorite));
  };

  const removeFavoriteItem = (itemId) => {
    const savedDataFavorite = getDataFavorite();
    const updatedDataFavorite = savedDataFavorite.filter((item) => item.id !== itemId);
    localStorage.setItem(TODO_ITEMS_FAVORITE, JSON.stringify(updatedDataFavorite));
  };

  const createTodoItem = (event) => {
    event.stopPropagation();
    event.preventDefault();

    const data = {
      title: null,
      description: null,
    };

    event.target.querySelectorAll('input, textarea').forEach((input) => {
      data[input.name] = input.value;
    });

    try {
      const savedItem = saveTodoItem(data);
      const todoItemHTML = createTodoItemLayout(savedItem);
      todoItemContainer.prepend(todoItemHTML);
    } catch (error) {
      alert(error.message);
    } finally {
      event.target.reset();
    }
  };

  const createTodoItemLayout = (data, isFavorite = false) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'col-4';
    wrapper.setAttribute('data-todo-id', data.id);

    const favoriteBtnText = isFavorite ? 'Remove from favorite' : 'Add o favorite';

    wrapper.innerHTML = `<div class="taskWrapper bg-light border rounded p-3">
                                  <div class="taskHeading">#${data.id} | ${data.title}</div>
                                  <div class="taskDescription">${data.description}</div>
                                  <hr>
                                  <div class="d-flex justify-content-between">
                                      <button class="btn btn-danger btn-sm" data-remove-btn>Remove</button>
                                      <button class="btn btn-light btn-sm border" data-favorite-btn>${favoriteBtnText}</button>
                                  </div>
                            </div>`;

    return wrapper;
  };

  const loadedHandler = () => {
    const todoItems = getData();
    const favoriteItems = getDataFavorite();
    if (!todoItems.length) return;

    currentId = todoItems[todoItems.length - 1].id + 1;

    todoItems.forEach((item) => {
      const layout = createTodoItemLayout(item, favoriteItems.some((favItem) => favItem.id === item.id));
      todoItemContainer.prepend(layout);
    });

    favoriteItems.forEach((item) => {
      const layout = createTodoItemLayout(item, true);
      favoriteItemContainer.prepend(layout);
    });
  };

  const handleRemoveTodo = (event) => {
    event.stopPropagation();
    if (!event.target.hasAttribute('data-remove-btn')) return;

    const currentWrapper = event.target.closest('[data-todo-id]');
    const todoId = Number(currentWrapper.getAttribute('data-todo-id'));

    const savedData = getData();
    const dataToSave = savedData.filter((item) => item.id !== todoId);

    localStorage.setItem(TODO_ITEMS, JSON.stringify(dataToSave));
    currentWrapper.remove();

    const savedDataFavorite = getDataFavorite();
    const dataToSaveFavorite = savedDataFavorite.filter((item) => item.id !== todoId);

    localStorage.setItem(TODO_ITEMS_FAVORITE, JSON.stringify(dataToSaveFavorite));
    currentWrapper.remove();
  };

  const handleAddToFavoriteTodo = (event) => {
    event.stopPropagation();
    if (!event.target.hasAttribute('data-favorite-btn')) return;

    const currentWrapper = event.target.closest('[data-todo-id]');
    const todoId = Number(currentWrapper.getAttribute('data-todo-id'));

    const savedDataFavorite = getDataFavorite();
    const savedData = getData();

    const isFavorite = savedDataFavorite.some((item) => item.id === todoId);

    if (isFavorite) {
      event.target.textContent = 'Add to favorite';
      removeFavoriteItem(todoId);
    } else {
      const favoriteItem = savedData.find((item) => item.id === todoId);
      saveFavoriteItem(favoriteItem);
      event.target.textContent = 'Remove from favorite';
    }
  };

  const handleRemoveAllTodos = () => {
    localStorage.removeItem(TODO_ITEMS);
    localStorage.removeItem(TODO_ITEMS_FAVORITE);
    todoItemContainer.innerHTML = '';
    favoriteItemContainer.innerHTML = '';
  };

  document.addEventListener('DOMContentLoaded', loadedHandler);
  form.addEventListener('submit', createTodoItem);

  todoItemContainer.addEventListener('click', handleAddToFavoriteTodo);
  todoItemContainer.addEventListener('click', handleRemoveTodo);

  favoriteItemContainer.addEventListener('click', handleAddToFavoriteTodo);
  favoriteItemContainer.addEventListener('click', handleRemoveTodo);
  removeAllBtn.addEventListener('click', handleRemoveAllTodos);
}());
