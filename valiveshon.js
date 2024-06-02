function add(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Plz type number";
  }
  return num1 + num2;
}
const talj = add(15, "20");
console.log(talj);

function meherj(sum1, sum2, sum3) {
  if (
    typeof sum1 !== "number" ||
    typeof sum2 !== "number" ||
    typeof sum3 !== "number"
  ) {
    return "plz type number";
  }
  return sum1 + sum2 + sum3;
}
const raj = meherj(30, 20, "14");
console.log(raj);
