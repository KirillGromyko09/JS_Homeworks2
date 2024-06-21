class Human {
  #name = null;

  #gender = null;

  constructor (name, gender) {
    this.#name = name;
    this.#gender = gender;
  }

  get name() {
    return this.#name;
  }
  set name (str) {
    if (typeof str !== 'string' || str.trim().length < 2) throw new Error(`${str} cannot set like name`);
    this.#name = str;
  }

  get gender() {
    return this.#gender;
  }
  set gender (str) {
    if (typeof str !== 'string' || str.trim().length < 2) throw new Error(`${str} cannot set like gender`);
    this.#gender = str;
  }

}

export default Human;
