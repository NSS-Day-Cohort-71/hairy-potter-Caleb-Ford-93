// Imports go first
import { firePottery } from "./Kiln.js";
import { makePottery } from "./PotteryWheel.js";


// Make 5 pieces of pottery at the wheel
const mug = makePottery("mug", 7, 5);
console.log(mug);

const vase = makePottery("vase", 20, 12);
console.log(vase);

const bowl = makePottery("bowl", 15, 7);
console.log(bowl);

const plantPot = makePottery("pot", 30, 15);
console.log(plantPot);

const plate = makePottery("plate", 15, 3);
console.log(plate);

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


// Fire each piece of pottery in the kiln


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

