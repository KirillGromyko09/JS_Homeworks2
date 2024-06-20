(function () {
  const TODO_ITEMS = 'todo-items';
  const form = document.querySelector('#todoForm');
  const todoItemContainer = document.querySelector('#todoItems');
  let currentId = 1;

  const getData = () => {
    const data = JSON.parse(localStorage.getItem(TODO_ITEMS));
    return data || [];
  };
  const SaveTodoItem = () => {
    const dataToSave = structuredClone(data);
    const savedData = getData();
    dataToSave.id = currentId;
    currentId += 1;
    savedData.push(dataToSave);
    localStorage.setItem(TODO_ITEMS, JSON.stringify(savedData));
    return getData().at(-1);
  };

  const CreateTodoItem = (event) => {
    event.preventDefault();
    event.preventDefault();

    const data = {
      title: null,
      description: null,
    };
    event.target.querySelectorAll('input,textarea').forEach((input) => {
      data[input.name] = input.value;
    });
    try {
      const savedItem = SaveTodoItem(data);
      const todoItemHTML = createTodoItemLayout(savedItem);
      todoItemContainer.prepend(todoItemHTML);
    } catch (error) {
      alert(error.message);
    } finally {
      event.target.reset();
    }
  };

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

  form.addEventListener('submit', CreateTodoItem);
}());
