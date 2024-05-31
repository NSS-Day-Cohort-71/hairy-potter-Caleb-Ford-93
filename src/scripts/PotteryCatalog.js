let potteryCatalog = [];


//if weight of potteryObj >= 6, price=40
//if weight of potteryObj < 6, price = 20
//if potteryObj[cracked = true], do not add price
//if potteryObj[cracked = false], push to potteryCatalog array
//return augmented potteryObj
export const toSellOrNotToSell = (potteryObj) => {
    if (potteryObj.cracked) {
        return potteryObj
    } else if (potteryObj.weight >= 6) {
        potteryObj.price = 40
        potteryCatalog.push(potteryObj)
    } else {
        potteryObj.price = 20
        potteryCatalog.push(potteryObj)
    };
    return potteryObj
};

//return a copy of potteryCatalog array
export const usePottery = () => {
    potteryCatalog.map((pottery) => ({ ...pottery }))
}