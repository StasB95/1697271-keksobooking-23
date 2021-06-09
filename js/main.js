// Функция №1
function number(min, max) {
  if (min >= 0 && max >= 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
number();


// Функция №2
function coordinate(min, max, decimalPlaces) {
  if (min >= 0 && max >= 0 && min < max) {
    return ((Math.random() * (max - min + 1)) + min).decimalPlaces(decimalPlaces);
  }
}
coordinate();
