// Функция №1
const getNumberInRange = (min, max) => {
  if (min >= 0 && max >= 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};
getNumberInRange();

// Функция №2
const getFloatNumberInRange = (min, max, decimaPlaces) => {
  if (min >= 0 && max >= 0 && min < max) {
    return ((Math.random() * (max - min + 1)) + min).toFixed(decimaPlaces);
  }
};
getFloatNumberInRange();
