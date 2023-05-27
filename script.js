document.addEventListener("DOMContentLoaded", getCountryName);

function getCountryName() {
  const apiUrl =
    "http://api.ipstack.com/2a05:4f46:41d:1c00:f9ea:97c2:62ab:e1af?access_key=baa725af19e3154ce97927876c4f9146";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const countryName = data.country_name;
      sessionStorage.setItem("country", countryName);
      const countryElement = document.querySelector("#country-element");
      countryElement.textContent = countryName;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
