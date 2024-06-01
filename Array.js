const country = "bangladesh";
const age = 52;
const isIndepentdent = true;
const student = { id: 221, class: 11, name: "Rana" };
const friends = [15, 16, 17, 18, 19, 16, 18];
function add(num1, num2) {
  return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndepentdent);
console.log(typeof student);
console.log(typeof friends);
console.log(typeof add);
console.log(Array.isArray(friends));
// ----------------------
console.log(friends.includes(18));

if (friends.indexOf(252) !== -1) {
}

// concat :---------------
const newfriendsAge = [12, 13, 11, 13];
const allFriens = newfriendsAge.concat(friends);
console.log(allFriens);
