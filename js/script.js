(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const data = {};

      formData.forEach((value, key) => {
        data[key] = value;
      });

      localStorage.setItem('formData', JSON.stringify(data));

      console.log('Form Data Saved:', data);

      form.reset();

      window.location.href = 'display.html';
    });
  });
}());
