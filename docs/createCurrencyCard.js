import { getCurrency } from "./fetching.js";

export const createCurrencyCard = (
  currencyFrom,
  currencyList,
  currencyIndex,
  place
) => {
  const currencyCard = document.createElement("div");
  const cardText = document.createElement("p");
  currencyCard.id = `${currencyIndex}`;

  currencyCard.addEventListener("click", async () => {
    place.innerHTML = "";

    localStorage.setItem("baseCurrency", currencyCard.id);
    const url = `https://v6.exchangerate-api.com/v6/3431c907cc0b581df072ae7e/latest/${currencyCard.id}`;
    const furtherObject = await getCurrency(url);

    Object.keys(furtherObject["conversion_rates"]).forEach((currencyIndex) => {
      createCurrencyCard(
        furtherObject["base_code"],
        furtherObject["conversion_rates"],
        currencyIndex,
        place
      );
    });
  });

  cardText.innerText = `1 ${currencyFrom} = ${
    currencyList[currencyIndex] + " " + currencyIndex
  }`;

  place.append(currencyCard);
  currencyCard.append(cardText);
};
