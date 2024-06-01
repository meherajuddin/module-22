/* fixed: per item wod requirements
1. chair --> 3cft
2. table --> 10cft
3. bed --> 50 cft



very: quantity
*/
function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
  const perChairwood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const chairWood = chairQuantity * perChairwood;
  const tableWood = tableQuantity * perTableWood;
  const bedWood = bedQuantity * perBedWood;

  //   console.log(chairQuantity, tableQuantity, bedQuantity);

  const totalWood = chairWood + tableWood + bedWood;
  return totalWood;
}
const totalWood = woodCalculator(2, 2, 5);
console.log("total Wood required:", totalWood);
