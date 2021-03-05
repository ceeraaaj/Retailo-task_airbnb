import { flexibility, flexibilityArr } from "./constants";

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRandomFlexibilty() {
  let randomInt = getRandomInt(0, 3);
  console.log("Flexibility: ", flexibility[flexibilityArr[randomInt]]);
  return flexibility[flexibilityArr[randomInt]];
}

export function formatDate(date) {
  let dateArr = date.split("/");

  if (dateArr[0].length === 1) dateArr[0] = "0" + dateArr[0];
  if (dateArr[1].length === 1) dateArr[1] = "0" + dateArr[1];

  date = `${dateArr[2]}-${dateArr[0]}-${dateArr[1]}`;
  return date;
}

export function formatGuests(string) {
  let splitStr = String(string).split("");
  return { adults: splitStr[0], childs: splitStr[1], infants: splitStr[2] };
}

export function getMonthDifference(date) {
  let dateObject = new Date(date);
  let currentDateObject = new Date();

  let months =
    (dateObject.getFullYear() - currentDateObject.getFullYear()) * 12;
  months -= currentDateObject.getMonth();
  months += dateObject.getMonth();

  console.log("Months: ", months);

  return months;
}
