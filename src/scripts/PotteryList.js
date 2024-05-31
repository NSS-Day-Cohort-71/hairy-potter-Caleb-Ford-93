import { usePottery } from "./PotteryCatalog.js"

//get items to be sold from PotteryCatalog.js
//convert each object into HTML string
//return single string for all pottery HTML representation
export const PotteryList = () => {
   const potteryToDisplay = usePottery();
   let displayedPottery = ``
   potteryToDisplay.forEach((item) => {
    displayedPottery += `
    <section class="pottery" id="${item.id}">
        <h2 class="pottery__shape">${item.shape}</h2>
        <div class="pottery__properties">
        Item weighs ${item.weight} grams and is ${item.height} cm in height
        </div>
        <div class="pottery__price">Price is $${item.price}</div>
    </section>
    `
   });
   return displayedPottery
}


