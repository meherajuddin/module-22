const phones = [
  {
    name: "samsung",
    camera: 200,
    Storage: "1tb",
    price: 126000,
    colors: "silver",
  },
  {
    name: "walton",
    camera: 64,
    Storage: "256gb",
    price: 29999,
    colors: "silver",
  },
  {
    name: "iphone",
    camera: 48,
    Storage: "12gb",
    price: 134000,
    colors: "silver",
  },
  {
    name: "xaomi",
    camera: 12,
    Storage: "24gb",
    price: 900000,
    colors: "silver",
  },
  {
    name: "oppo",
    camera: 50,
    Storage: "4+3gb",
    price: 20000,
    colors: "silver",
  },
  {
    name: "nokeya",
    camera: 12,
    Storage: "12gb",
    price: 35622,
    colors: "silver",
  },
  {
    name: "nathing",
    camera: 12,
    Storage: "12gb",
    price: 450000,
    colors: "silver",
  },
  {
    name: "honor",
    camera: 12,
    Storage: "12gb",
    price: 36000,
    colors: "silver",
  },
];

// function cheapestPhone(phones) {
//   let cheapest = phones[0];
//   for (let i = 0; i < phones.length; i++) {
//     const phone = phones[i];
//     if (phone.price < cheapest.price) {
//       cheapest = phone;
//     }
//   }
//   return cheapest;
// }
// const mySelection = cheapestPhone(phones);
// console.log(mySelection);

function cheapestCamera(phones) {
  let cheapest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    if (phone.camera > cheapest.camera) {
      cheapest = phone;
    }
  }
  return cheapest;
}
const mySelection = cheapestCamera(phones);
console.log(mySelection);
