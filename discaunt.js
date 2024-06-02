function ticktPrice(ticketQuantity) {
  const first100Rate = 100;
  const second100Rate = 90;
  const restTicketRate = 70;
  if (ticketQuantity <= 100) {
    const price = ticketQuantity * first100Rate;
    return price;
  } else {
    const first100pice = 100 * first100Rate;
    const second100Pice = 100 * second100Rate;
    const restTicketQuantity = ticketQuantity - 200;
    const restTicketpice = restTicketQuantity * restTicketRate;
    const totalcost = first100pice + second100Pice + restTicketpice;
  }
}
const price = ticktPrice(220);
console.log("price", price);
