// Imports go first
import { firePottery } from "./Kiln.js";
import { toSellOrNotToSell } from "./PotteryCatalog.js";
import { PotteryList } from "./PotteryList.js";
import { makePottery } from "./PotteryWheel.js";


// Make 5 pieces of pottery at the wheel
const mug = makePottery("Mug", 5, 5);
console.log(mug);

const vase = makePottery("Vase", 20, 12);
console.log(vase);

const bowl = makePottery("Bowl", 15, 7);
console.log(bowl);

const plantPot = makePottery("Pot", 30, 15);
console.log(plantPot);

const plate = makePottery("Plate", 15, 3);
console.log(plate);

// Fire each piece of pottery in the kiln
const firedMug = firePottery(mug, 1950);
console.log(firedMug);

const firedVase = firePottery(vase, 860);
console.log(firedVase);

const firedBowl = firePottery(bowl, 2400);
console.log(firedBowl);

const firedPlantPot = firePottery(plantPot, 2200);
console.log(firedPlantPot);

const firedPlate = firePottery(plate, 2199);
console.log(firedPlate);

// Determine which ones should be sold, and their price
toSellOrNotToSell(firedMug);
toSellOrNotToSell(firedVase);
toSellOrNotToSell(firedBowl);
toSellOrNotToSell(firedPlantPot);
toSellOrNotToSell(firedPlate);

// Invoke the component function that renders the HTML list

const potteryListHtml = document.querySelector(".potteryList");
potteryListHtml.innerHTML = PotteryList();