let potteryPrimaryKey = 1;

export const makePottery = (shape, weight, height) => {
    //return an object with the following properties: shape, weight, height, id.
    const pottery = {
        shape: shape,
        weight: weight,
        height: height,
        id: potteryPrimaryKey
    }
    potteryPrimaryKey++
    return pottery
}