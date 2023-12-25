function titleCase(str) {
  let words = str.split(' ');
  let newSent = [];
  // console.log(words);
  for (let i = 0; i < words.length; i++) {
    newSent.push(words[i][0].toUpperCase() + words[i].slice(1).toLowerCase());
  }
  return newSent.join(' ');
}

console.log(titleCase("I'm a little tea pot"));

