class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.albumsList.addEventListener(
      'click',
      this.handleAlbumClick.bind(this),
    );
    this.view.backButton.addEventListener(
      'click',
      this.handleBackButtonClick.bind(this),
    );
  }

  async loadAlbums() {
    const albums = await this.model.fetchAlbums();
    this.view.displayAlbums(albums);
  }

  async handleAlbumClick(event) {
    const { albumId } = event.target.dataset;
    if (albumId) {
      const photos = await this.model.fetchPhotos(albumId);
      this.view.displayPhotos(photos);
      const albums = await this.model.fetchAlbums();
      const albumTitle = albums.find((a) => a.id == albumId).title;
      this.view.setAlbumTitle(albumTitle);
      this.view.showAlbumView();
    }
  }

  handleBackButtonClick() {
    this.view.showAlbumsListView();
  }
}
