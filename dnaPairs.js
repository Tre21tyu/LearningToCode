function pairElement(str) {
  let dna = {
    "G": "C",
    "C": "G",
    "A": "T",
    "T": "A"
  };
  let pairings = [];
  for (let i = 0; i < str.length; i++) {
      pairings.push([str[i], dna[str[i]]]);
  }
  return pairings;
}

console.log(pairElement("GCG"));
