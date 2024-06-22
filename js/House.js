class House {
  #apartments = [];

  #maxApartmentsAmount;

  constructor(maxApartmentsAmount) {
    this.#maxApartmentsAmount = maxApartmentsAmount;
  }

  get apartments() {
    return this.#apartments;
  }

  get maxApartmentsAmount() {
    return this.#maxApartmentsAmount;
  }

  addApartment(flat) {
    if (this.apartments.length < this.maxApartmentsAmount){
      this.apartments.push(flat);
    } else throw new Error('No more apartments in house');
  }
}

export default House;
