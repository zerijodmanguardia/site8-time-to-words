// expecting time to be a string in the format like '8:15' or '12:30'
function getEnglishWord(number) {
  let tempNumber = number;
  if (typeof number === 'string') {
    tempNumber = +number;
  }
  const base = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  };

  const tenths = {
    2: 'twenty',
    3: 'thirty',
    4: 'fourty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
  };

  const tenthDigit = tempNumber / 10;
  let word = base[tempNumber];

  if (tenthDigit >= 2) {
    // check if we don't have decimals
    word = tenthDigit % 1 === 0 ? tenths[Math.floor(tenthDigit)] : `${tenths[Math.floor(tenthDigit)]} ${base[tempNumber % 10]}`;
  }
  return word;
}

function convertTimeToWords(time) {
  // TODO: real code goes here!

  const [hour, min] = time.split(':');

  let output = '';

  if (time === '0:00') {
    return 'midnight';
  }

  if (min === '00') {
    output = `${getEnglishWord(hour)} o'clock`;
  } else {
    // convert to typeof integer
    const convertedMin = +min;

    // handle 'past/quarter' wordings
    if (convertedMin <= 30) {
      // handle quarter
      if (convertedMin === 15) {
        output = `quarter past ${getEnglishWord(hour)}`;
      } else if (convertedMin === 30) {
        output = `half past ${getEnglishWord(hour)}`;
      } else {
        output = `${getEnglishWord(convertedMin)} past ${getEnglishWord(+hour)}`;
      }
    } else {
      // handle > 30mins sentences
      output = 60 - min === 15 ? `quarter to ${getEnglishWord(+hour + 1)}` : `${getEnglishWord(60 - min)} to ${getEnglishWord(+hour + 1)}`;
    }
  }

  return output;
}

module.exports = { convertTimeToWords };
