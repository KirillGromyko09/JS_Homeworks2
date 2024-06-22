class Apartment {
  #residents = [];

  get residents() {
    return this.#residents;
  }

  addResident(humanExample) {
    this.residents.push(humanExample);
  }
}

export default Apartment;
