export default class Character {
  #name;
  #height;
  #weight;

  constructor({ name, height, weight }) {
    this.#name = name;
    this.#height = height;
    this.#weight = weight;
  }

  get name() {
    return this.#name;
  }
  get height() {
    return this.#height;
  }
  get weight() {
    return this.#weight;
  }
}
