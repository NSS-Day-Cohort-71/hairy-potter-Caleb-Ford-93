//add new property of "fired" to potteryObj with the value of true
    //add new property of "cracked" to potteryObj
        //if temp is greater than 2200 then cracked = true
        //if temp is less than 2200 then cracked = false
    //return augmented object

export const firePottery = (potteryObj, temp) => {
    potteryObj.fired = true;
    if (temp > 2200) {
        potteryObj.cracked = true;
    } else {
        potteryObj.cracked = false;
    };
    return potteryObj
};