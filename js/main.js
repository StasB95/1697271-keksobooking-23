const MIN_STEP_VALUE = 1;
const MAX_STEP_VALUE = 99;
const NUMBER_FLOAT_VALUE = 0;
const MIN_PRICE = 1000;
const MAX_PRICE = 10000;
const MIN_AMOUNT_USERS = 1;
const MAX_AMOUNT_USERS = 5;
const ARRAY_DATA_AMOUNT = 10;
const COORDINATE_MIN_X = 35.65000;
const COORDINATE_MAX_X = 35.70000;
const COORDINATE_MIN_Y = 139.70000;
const COORDINATE_MAX_Y = 139.80000;
const COORDINATE_NUMBER_FLOAT_VALUE = 5;

const TITLES = [
  'Дворец аркканцера',
  'Квартира казначея',
  'Покои алхимика',
  'Дом Ринсвинда',
  'Комнаты студентов',
];

const TYPE_HOUSE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const AMOUNT_ROOM = [
  1,
  2,
  3,
  4,
  5,
];

const AMOUNT_GUEST = [
  1,
  2,
  3,
  4,
  5,
];

const TIME = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTIONS = [
  'Всемирно известный Незримый Университет. Здесь можно встретить самого аркканцлера Чудакули)',
  'В квартире казначея вы не встретите самого казначея. Потому что он всегда занят в университете',
  'В покоях алхимика вы сможете наблюдать взрывы, которыми всегда сопровождается работа алхимика',
  'Побывать в доме Ринсвинда большая честь. Но его как обычно там нет. Он опять ищет себе приключения',
  'А это общежитие студентов. Ничего интересного',
];

const PHOTO_URLS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const getRandomData = (arrayName) => arrayName[Math.floor(Math.random() * arrayName.length)];

const generateRandomNumber = (min = MIN_STEP_VALUE, max = MAX_STEP_VALUE) => Math.ceil((Math.random() * (max - min)) + min);

const generateRandomNumberFloat = (min = MIN_STEP_VALUE, max = MAX_STEP_VALUE, numberFloat = NUMBER_FLOAT_VALUE) => {
  const result = Math.random() * (max - min) + min;
  return result.toFixed(numberFloat);
};

const getRandomNumber = (min = MIN_STEP_VALUE, max = MAX_STEP_VALUE, numberFloat = NUMBER_FLOAT_VALUE) => {
  if (min < 0 || max < 0) {
    return 'Числа не должны быть отрицательные';
  } else if (min > max) {
    return `Число min-${min} не должно быть больше max-${max}`;
  } else if (min === max) {
    return `Число min-${min} не должно быть равно max-${max}`;
  } else if (numberFloat) {
    return generateRandomNumberFloat(min, max, numberFloat);
  }
  else {
    return generateRandomNumber(min, max);
  }
};

getRandomNumber();

const getRandomArrayData = (array) => {
  const arrayCopy = array.slice();
  const randomQuantity = getRandomNumber(1, array.length);
  const randomArrayElements = [];
  while (randomArrayElements.length < randomQuantity) {
    const randomIndex = getRandomNumber(0, arrayCopy.length - 1);
    const randomElement = arrayCopy[randomIndex];
    randomArrayElements.push(randomElement);
    arrayCopy.splice(randomIndex, 1);
  }
  return randomArrayElements;
};

const createArrayWithData = (amountArray = ARRAY_DATA_AMOUNT) => {
  const array = [];
  for (let idx = 0; idx < amountArray; idx++) {
    const lat = generateRandomNumberFloat(COORDINATE_MIN_X, COORDINATE_MAX_X, COORDINATE_NUMBER_FLOAT_VALUE);
    const lng = generateRandomNumberFloat(COORDINATE_MIN_Y, COORDINATE_MAX_Y, COORDINATE_NUMBER_FLOAT_VALUE);

    array.push(
      {
        author: {
          avatar: `img/avatars/user0${generateRandomNumber(MIN_AMOUNT_USERS, MAX_AMOUNT_USERS)}.png`,
        },
        location: {
          lat: lat,
          lng: lng,
        },
        offer: {
          title: getRandomData(TITLES),
          address: `${lat}, ${lng}`,
          price: generateRandomNumber(MIN_PRICE, MAX_PRICE),
          type: getRandomData(TYPE_HOUSE),
          rooms: getRandomData(AMOUNT_ROOM),
          guests: getRandomData(AMOUNT_GUEST),
          checkin: getRandomData(TIME),
          checkout: getRandomData(TIME),
          features: getRandomArrayData(FEATURES),
          descriptions: getRandomData(DESCRIPTIONS),
          photos: getRandomArrayData(PHOTO_URLS),
        },
      },
    );
  }
  return array;
};

createArrayWithData();

console.log(createArrayWithData());
