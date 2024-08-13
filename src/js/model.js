class Model {
  async fetchAlbums() {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    const albums = await response.json();
    return albums;
  }

  async fetchPhotos(albumId) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`,
    );
    const photos = await response.json();
    return photos;
  }
}
