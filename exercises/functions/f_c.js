function convertFtoC(fahrenheitTempature) {
  let celsiusTemperature = (fahrenheitTempature - 32) * (5 / 9);
  return celsiusTemperature;
}

let currentTemp = 70;
let celsiusTemp = convertFtoC(currentTemp);
console.log(celsiusTemp.toFixed(2));
