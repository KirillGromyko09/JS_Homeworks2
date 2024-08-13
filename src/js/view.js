class View {
  constructor() {
    this.albumsList = document.getElementById('albumsList');
    this.photosList = document.getElementById('photosList');
    this.albumTitle = document.getElementById('albumTitle');
    this.albumContainer = document.getElementById('albumContainer');
    this.backButton = document.getElementById('backButton');
  }

  displayAlbums(albums) {
    this.albumsList.innerHTML = '';
    albums.forEach((album) => {
      const listItem = document.createElement('li');
      listItem.classList.add('list-group-item', 'list-group-item-action');
      listItem.textContent = album.title;
      listItem.dataset.albumId = album.id;
      this.albumsList.appendChild(listItem);
    });
  }

  displayPhotos(photos) {
    this.photosList.innerHTML = '';
    photos.forEach((photo) => {
      const photoCard = document.createElement('div');
      photoCard.classList.add('col-md-4');
      photoCard.innerHTML = `
                <div class="card">
                    <img src="${photo.thumbnailUrl}" class="card-img-top" alt="${photo.title}">
                    <div class="card-body">
                        <p class="card-text">${photo.title}</p>
                    </div>
                </div>
            `;
      this.photosList.appendChild(photoCard);
    });
  }

  setAlbumTitle(title) {
    this.albumTitle.textContent = title;
  }

  showAlbumView() {
    this.albumContainer.style.display = 'block';
    this.albumsList.style.display = 'none';
  }

  showAlbumsListView() {
    this.albumContainer.style.display = 'none';
    this.albumsList.style.display = 'block';
  }
}
