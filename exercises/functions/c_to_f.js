 
 function convertCtoF(celsiusTemperature){
let fahrenheitTempature = celsiusTemperature * 1.8 + 32;
return fahrenheitTempature;
 }
 let currentTemp = 100;
let fahrenheitTemp=convertCtoF(currentTemp)
console.log(fahrenheitTemp.toFixed(2));