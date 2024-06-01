const names = [
  "abul",
  "babul",
  "kabul",
  "chabul",
  "abul",
  "tabul",
  "khabul",
  "kabul",
  "babul",
];
function remove(names) {
  const unipue = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (unipue.includes(name) === false) {
      unipue.push(name);
    }
  }
  return unipue;
}
const allName = remove(names);
console.log(allName);
