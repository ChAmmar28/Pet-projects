export const populateSelect = (select, options) => {
  for (let element of Object.keys(options)) {
    const option = document.createElement("option");
    option.innerText = element;
    select.append(option);
  }
};
