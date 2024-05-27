(function () {
  if (window.location.pathname.includes('display.html')) {
    const ul = document.createElement('ul');
    const dataFromForm = JSON.parse(localStorage.getItem('formData'));
    for (const key in dataFromForm) {
      const li = document.createElement('li');
      if (dataFromForm.hasOwnProperty(key)) {
        if (dataFromForm[key] === '') {
          li.textContent = `${key}: ERROR NO DATA`;
        } else {
          li.textContent = `${key}: ${dataFromForm[key]}`;
        }
      }
      ul.append(li);
    }
    document.body.append(ul);
  }
}());
