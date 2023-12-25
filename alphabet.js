// function fearNotLetter(str) {
//   let wordList = [...str];

//   for (let i = 0; i < str.length - 1; i++) {
//     let temp = str.charCodeAt(i);
//     let tempNext = str.charCodeAt(i + 1);

//     if (temp + 1 !== tempNext) {
//       // If there's a missing character, insert it into wordList
//       wordList.splice(i + 1, 0, String.fromCharCode(temp + 1));
//     }
//   }

//   return wordList;
// }
function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}
console.log(fearNotLetter("ac"));
