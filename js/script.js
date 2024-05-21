(() => {
  const productData = {
    electronics: [
      { id: 1, name: 'Телефон', description: 'Смартфон с 5G' },
      { id: 2, name: 'Ноутбук', description: 'Игровой ноутбук' },
    ],
    clothing: [
      { id: 3, name: 'Футболка', description: 'Хлопковая футболка' },
      { id: 4, name: 'Джинсы', description: 'Джинсы скинни' },
    ],
    books: [
      { id: 5, name: 'Книга JavaScript', description: 'Руководство по JavaScript' },
      { id: 6, name: 'Книга HTML/CSS', description: 'Руководство по HTML и CSS' },
    ],
  };

  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('categories').addEventListener('click', (event) => {
      if (event.target.tagName === 'LI') {
        const category = event.target.getAttribute('data-category');
        const items = productData[category];
        const productList = document.querySelector('.product-list');
        productList.innerHTML = items.map((item) => `<li data-id="${item.id}">${item.name}</li>`).join('');
        document.getElementById('products').style.display = 'block';
        document.getElementById('product-details').style.display = 'none';
      }
    });

    document.getElementById('products').addEventListener('click', (event) => {
      if (event.target.tagName === 'LI') {
        const productId = parseInt(event.target.getAttribute('data-id'));

        const allProducts = Object.values(productData).flat();
        const product = allProducts.find((item) => item.id === productId);

        const detailsDiv = document.querySelector('.product-details');
        detailsDiv.innerHTML = `
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <button>Купить</button>
        `;
        document.getElementById('product-details').style.display = 'block';
      }
    });

    document.getElementById('product-details').addEventListener('click', (event) => {
      if (event.target.tagName === 'BUTTON') {
        alert('Товар куплен!');
        document.getElementById('products').style.display = 'none';
        document.getElementById('product-details').style.display = 'none';
      }
    });

    document.getElementById('products').style.display = 'none';
    document.getElementById('product-details').style.display = 'none';
  });
})();
