function convertToRoman(num) {
  var romanNumerals = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
  };

  var result = "";

  for (var key in romanNumerals) {
    let romanIntValue = romanNumerals[key];
    if (num >= romanIntValue) {
      let count = Math.floor(num / romanIntValue);
      result += key.repeat(count);
      num %= romanIntValue;
    }
  }

  return result;
}

console.log(convertToRoman(900));
