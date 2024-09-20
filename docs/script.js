import { createCurrencyCard } from "./createCurrencyCard.js";
import { getCurrency } from "./fetching.js";

const baseCurrency = localStorage.getItem("baseCurrency") || "KGS";
const url = `https://v6.exchangerate-api.com/v6/3431c907cc0b581df072ae7e/latest/${baseCurrency}`;

const firstObject = await getCurrency(url);

if (firstObject === "error") {
  console.log("error screen");
} else {
  const wrap = document.querySelector(".wrap");

  Object.keys(firstObject["conversion_rates"]).forEach((currencyIndex) => {
    createCurrencyCard(
      firstObject["base_code"],
      firstObject["conversion_rates"],
      currencyIndex,
      wrap
    );
  });
}
