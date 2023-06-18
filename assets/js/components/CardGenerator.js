import swapiData from "../api/swapi.js";
import CardCharacter from "../class/CardCharacter.js";

const CardGenerator = () => {
  const onFulfilled = async ({
    data,
    color,
    cardGenerator,
    isLast,
    numberList,
  }) => {
    const { name, height, mass } = data;
    try {
      cardGenerator.parentElement.insertAdjacentHTML(
        "beforeend",
        new CardCharacter({
          name,
          height,
          weight: mass,
          color,
          numberList: numberList,
        }).html()
      );
    } catch (error) {
      console.log(error);
    } finally {
      cardGenerator.dataset.state = isLast ? "completed" : "";
    }
  };

  async function* getCharacter(cardGenerator) {
    const { color, range } = cardGenerator.dataset;
    const [start, end] = range.split(",").map(Number);

    for (let i = start; i <= end; i++) {
      cardGenerator.dataset.state = "loading";
      const data = await swapiData(i);

      yield onFulfilled({
        data,
        color,
        cardGenerator,
        isLast: i === end,
        numberList: i,
      });
    }
  }

  document.querySelectorAll(".col-3[data-card-generator]").forEach((card) => {
    const generator = getCharacter(card);
    const cardBody = card.querySelector(".card-body");

    const listener = () => {
      if (!card.dataset.state) {
        generator.next();
      }
    };

    cardBody.addEventListener("mouseenter", listener);
    cardBody.addEventListener("click", listener);
  });
};

export default CardGenerator;
