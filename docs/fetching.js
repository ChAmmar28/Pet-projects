export const getCurrency = async (url) => {
  try {
    let response = await fetch(url, { method: "GET" });
    if (!response.ok) throw new Error("error fo fetch");

    let data = await response.json();
    if (!data["base_code"] || !data["conversion_rates"]) {
      throw new Error("Invalid currency data structure.");
    }
    return {
      fullData: data,
      base_code: data["base_code"],
      conversion_rates: data["conversion_rates"],
    };
  } catch (error) {
    console.error(error);
    return "error";
  }
};
