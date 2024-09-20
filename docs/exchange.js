import { convertor } from "./convertor.js";
import { populateSelect } from "./populateSelect.js";
import { getCurrency } from "./fetching.js";

const input = document.querySelector(".inputContainer");
const p = document.querySelector(".result");
const selectA = document.querySelector("#selectA");
const selectB = document.querySelector("#selectB");

let url = `https://v6.exchangerate-api.com/v6/3431c907cc0b581df072ae7e/latest/${localStorage.getItem(
  "baseCurrency"
)}`;
let exchangeObject = await getCurrency(url);

populateSelect(selectA, exchangeObject["conversion_rates"]);
populateSelect(selectB, exchangeObject["conversion_rates"]);

p.innerText = `0.00 ${selectA.value} = 0.00 ${selectB.value}`;

selectA.addEventListener("click", async () => {
  localStorage.setItem("baseCurrency", selectA.value);
  url = `https://v6.exchangerate-api.com/v6/3431c907cc0b581df072ae7e/latest/${selectA.value}`;
  exchangeObject = await getCurrency(url);
  const isValidNumber =
    !isNaN(parseFloat(input.value)) && isFinite(input.value);
  if (input.value === "") {
    p.innerText = `0.00 ${selectA.value} = 0.00 ${selectB.value}`;
  }
  if (isValidNumber) {
    p.innerText = convertor(
      input.value,
      exchangeObject["conversion_rates"],
      exchangeObject["base_code"],
      selectB.value
    );
  } else {
    console.log("Error of input");
  }
});

input.addEventListener("keyup", () => {
  const isValidNumber =
    !isNaN(parseFloat(input.value)) && isFinite(input.value);
  if (input.value === "") {
    p.innerText = `0.00 ${selectA.value} = 0.00 ${selectB.value}`;
  }
  if (isValidNumber) {
    p.innerText = convertor(
      input.value,
      exchangeObject["conversion_rates"],
      exchangeObject["base_code"],
      selectB.value
    );
  } else {
    console.log("Error of input");
  }
});
