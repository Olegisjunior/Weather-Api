const maxTe = document.getElementById("maxT");
const minTe = document.getElementById("minT");
const streetTe = document.getElementById("streetT");
const qwe = document.getElementById("city");
// const misto = (elem) => elem.textContent;
// const mistowithoutspace = misto(qwe).split(" ").join("");
const inpErr = document.getElementById("err");

const submit = document.getElementById("submit-button");
const clientval = document.getElementById("clientval");
// взяти дані із імпут
// і після натискання кнопки передати у апі

submit.addEventListener("click", () => {
  const clval = clientval.value;
  if (clval === "") {
    inpErr.style.display = "block";
  } else {
    inpErr.style.display = "none";
    weather(clval);
  }
});

function weather(CountryCity) {
  const url = `https://data.api.xweather.com/forecasts/${CountryCity}?format=json&filter=day&limit=2&fields=,periods.maxTempC,periods.minTempC,periods.weather&client_id=6emEHvkHBbfz1QuZ8pA3L&client_secret=pSoV5WCMGr7QG9Czepfr6BClmjHe0yysoGiSWOpS`;
  // console.log(url);
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      const arr = data.response[0];
      const arr2 = arr.periods[0];
      minTe.innerHTML = `Мінімальна температура на вулицях ${CountryCity} : ${arr2.minTempC}°C.`;
      maxTe.innerHTML = `Максимальна температура на вулицях ${CountryCity} : ${arr2.maxTempC}°C.`;
      streetTe.innerHTML = `Погода взагальному на вулицях ${CountryCity} : ${arr2.weather}.`;
    })
    .catch((error) => console.log(error));
}



