/* eslint-disable quotes */
/* eslint-disable no-use-before-define */
// expecting time to be a string in the format like '8:15' or '12:30'
/* estlint-disable */
function convertTimeToWords(time) {
  // TODO: real code goes here!

  const [hour, min] = time.split(":");

  // console.log(hour, min);

  const HOUR_WORD = getEnglishWord(hour);
  let MIN_WORD = "";

  // console.log(HOUR_WORD);

  if (time === "0:00") {
    return "midnight";
  }

  if (min === "00") {
    MIN_WORD = "o'clock";
  } else {
    const convMin = +min;
    // console.log(typeof convMin, convMin);

    if (convMin === 15) {
      return `quarter past ${HOUR_WORD}`;
    } else if (convMin === 30) {
      return `half past ${HOUR_WORD}`;
    } else if (convMin === 45) {
      return `quarter to ${getEnglishWord(+hour + 1)}`;
    } else if (convMin > 30) {
      let tempNumber = 60 - min;
      const ONES = getEnglishWord(tempNumber % 10);
      const TENTHS = getEnglishWord(Math.floor(tempNumber / 10) + "0");

      return `${TENTHS ?? ""} ${ONES ?? ""} to ${getEnglishWord(
        +hour + 1
      )}`.trim();
    }

    MIN_WORD = getEnglishWord(convMin);
    return `${MIN_WORD} past ${HOUR_WORD}`;
  }
}

function getEnglishWord(number) {
  // console.log(number);

  const obj = {
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
  };

  return obj[number];
}

const V = convertTimeToWords("2:33");
console.log(V);

module.exports = { convertTimeToWords };
