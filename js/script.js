'use strict';

(function () {
  const TODO_ITEMS = 'todo-items';
  const form = document.querySelector('#todoForm');
  const todoItemContainer = document.querySelector('#todoItems')
  const removeAllBtn = document.querySelector('[data-remove-all]')
  let currentId = 1;

  const createTodoItem = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const data = {
      title: null,
      description: null
    }

    event.target.querySelectorAll('input, textarea').forEach(input => {
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
  }

  const getData = () => {
    const data = JSON.parse(localStorage.getItem(TODO_ITEMS));
    return data || [];
  }
  const saveTodoItem = (data) => {
    const dataToSave = structuredClone(data)
    const savedData = getData();
    dataToSave.id = currentId;
    currentId++
    savedData.push(dataToSave)
    localStorage.setItem(TODO_ITEMS, JSON.stringify(savedData))

    const dataFromLS = getData();
    return dataFromLS[dataFromLS.length - 1];
  }

  const createTodoItemLayout = (data) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'col-4';
    wrapper.setAttribute('data-todo-id', data.id);


    wrapper.innerHTML = `<div class="taskWrapper">
                            <div class="taskHeading">#${data.id} | ${data.title}</div>
                            <div class="taskDescription">${data.description}</div>
                            <hr>
                            <button class="btn btn-danger btn-sm" data-remove-btn>Remove</button>
                        </div>`

    return wrapper;
  }

  const loadedHandler = () => {
    const todoItems = getData();
    if(!todoItems.length) return;

    currentId = todoItems[todoItems.length - 1].id + 1

    todoItems.forEach(item => {
      const layout = createTodoItemLayout(item)
      todoItemContainer.prepend(layout);
    })
  }

  const handleRemoveTodo = (event) => {
    event.stopPropagation();
    if(!event.target.hasAttribute('data-remove-btn')) return;

    const currentWrapper = event.target.closest('[data-todo-id]');
    const todoId = Number(currentWrapper.getAttribute('data-todo-id'));

    const savedData = getData();
    const dataToSave = savedData.filter(item => {
      return item.id !== todoId
    })

    localStorage.setItem(TODO_ITEMS, JSON.stringify(dataToSave));
    currentWrapper.remove();
  }

  const handleRemoveAllTodos = () => {
    localStorage.removeItem(TODO_ITEMS);
    todoItemContainer.innerHTML = ''
  }

  document.addEventListener('DOMContentLoaded', loadedHandler)
  form.addEventListener('submit', createTodoItem)
  todoItemContainer.addEventListener('click', handleRemoveTodo)
  removeAllBtn.addEventListener('click', handleRemoveAllTodos)
}())

