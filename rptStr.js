function repeatStringNumTimes(str, num) {
    let strarr = [];
    for (let i = 0; i < num; i++) {
      strarr.push(str);
    }
    return strarr.join('');
  }
  
  repeatStringNumTimes("abc", 3);