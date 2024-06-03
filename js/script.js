(function () {
  const TODO_ITEMS = 'todo-items';
  const form = document.querySelector('#todoForm');
  let currentId = 1;

  const getData = () => {
    const data = JSON.parse(localStorage.getItem(TODO_ITEMS));
    return data || [];
  };
  const SaveTodoItem = () => {
    const dataToSave = structuredClone(data);
    dataToSave.id = currentId;
    currentId++;
    getData();
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
    const savedItem = SaveTodoItem(data);
    event.target.reset();
  };

  const CreateTodoItemLayout = () => {

  };

  form.addEventListener('submit', CreateTodoItem);
}());
