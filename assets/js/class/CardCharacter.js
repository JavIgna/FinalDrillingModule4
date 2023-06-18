import Character from "./Character.js";

export default class CardCharacter extends Character {
  #color;
  numberList;

  constructor({ name, height, weight, color, numberList }) {
    if (!name || !height || !weight || !color) {
      throw new Error(
        "Error en constructor de CardCharacter: Faltan parámetros"
      );
    }
    super({ name, height, weight });
    this.#color = color;
    this.numberList = numberList;
  }

  html() {
    if (
      this.numberList === 3 ||
      this.numberList === 8 ||
      this.numberList === 13
    ) {
      return `
        <div class="col-2 px-3 py-3 justify-content-end align-items-center">
          <div class="line-container pe-3">
            <div class="vertical-line-custom"></div>
          </div>
        </div>
        <div class="col-3 px-3 py-3">
          <div class="card shadow rounded-3">
            <div class="card-body mt-2 mb-2">
              <h5 class="card-title fw-bold">
                <span class="circle ${this.#color}"></span>
                ${this.name}
              </h5>
              <div class="card-text">
                <span class="fw-bold">Altura:</span>
                  ${this.height} cm.
                <span class="fw-bold">Peso:</span>
                  ${
                    this.weight === "unknown"
                      ? "desconocido"
                      : this.weight + " kg"
                  }.
              </div>
            </div>
          </div>
        </div>
      `;
    } else {
      return `
      <div class="col-3 px-3 py-3">
        <div class="card shadow rounded-3">
          <div class="card-body mt-2 mb-2">
            <h5 class="card-title fw-bold">
              <span class="circle ${this.#color}"></span>
                ${this.name}
            </h5>
            <div class="card-text">
              <span class="fw-bold">Altura:</span>
                ${this.height} cm.
              <span class="fw-bold">Peso:</span>
                ${
                  this.weight === "unknown"
                    ? "desconocido"
                    : this.weight + " kg"
                }.
            </div>
          </div>
        </div>
      </div>
    `;
    }
  }
}
