const shopingCard = [
  { name: "sart", price: 500, Quantit: 5 },
  { name: "pant", price: 600, Quantit: 2 },
  { name: "belt", price: 200, Quantit: 4 },
  { name: "show", price: 1800, Quantit: 3 },
];

function totalcard(phoducts) {
  let sum = 0;
  for (let i = 0; i < phoducts.length; i++) {
    const shopinge = phoducts[i];
    const productotal = shopinge.price * shopinge.Quantit;
    sum = sum + productotal;
    // console.log(shopinge);
  }
  return sum;
}
const prodakt1 = totalcard(shopingCard);
console.log(prodakt1);
