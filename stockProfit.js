console.log(' --- Stock Profit ---');
console.log(
  'You will be given a list of stock prices for a given day and your goal is to return the maximum profit that could have been made by buying a stock at the given price and then selling the stock later on. For example if the input is: [45, 24, 35, 31, 40, 38, 11] then your program should return 16 because if you bought the stock at $24 and sold it at $40, a profit of $16 was made and this is the largest profit that could be made. If no profit could have been made, return -1.'
);

function StockPicker(arr) {
  let lowest = arr[0];
  let latestProfit = -1;
  for (let i = 1; i < arr.length; i++) {
    let indexValue = arr[i];

    // Bigger than lowest value -> compare profit
    if (indexValue > lowest) {
      let profitCompareWithIndex = indexValue - lowest;
      latestProfit = Math.max(latestProfit, profitCompareWithIndex);
    } else {
      lowest = indexValue;
    }
  }
  return latestProfit;
}

const input = [45, 24, 35, 31, 40, 38, 11];
const input2 = [2, 10, 100, 47, 99, 1];

StockPicker(input);

console.log('input', input);
console.log('StockPicker profit', StockPicker(input));
