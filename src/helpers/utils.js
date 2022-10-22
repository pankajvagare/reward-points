export default class utils {

    static getTotalcalculatePoints(transactions) {
        let total = 0;
        for (let index = 0; index < transactions.length; index++) {
            let price = transactions[index].price;
            let eachRowAmount = 0;

            if (price >= 100) {
                let minTotal = price - 100;
                total += minTotal * 2;
                eachRowAmount = minTotal * 2;
            }

            if (price >= 50) {
                let minTotal = price - 50;
                total += minTotal * 1;
                //eachRowAmount = minTotal * 1;
                // let amountRemain50 = (price / 50);
                // amountRemain50 = Math.floor(amountRemain50) * 50;
                // total += minTotal;

                eachRowAmount += minTotal;
            }

            transactions[index].rewardPoints = eachRowAmount;
        }

        return total;
    }

}