function checkCashRegister(price, cash, cid) {
  const currencyUnit = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];

  let changeDue = cash - price;
  let changeArray = [];

  // Calculate total cash in drawer
  const totalCID = cid.reduce((acc, curr) => acc + curr[1], 0).toFixed(2);

  // Check if cash-in-drawer is less than the change due
  if (parseFloat(totalCID) < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // Check if cash-in-drawer is equal to the change due
  if (parseFloat(totalCID) === changeDue) {
    return { status: "CLOSED", change: cid };
  }

  // Calculate the change and populate changeArray
  for (let i = currencyUnit.length - 1; i >= 0; i--) {
    const coinName = currencyUnit[i][0];
    const coinValue = currencyUnit[i][1];
    const availableCoins = cid[i][1];
    let numberOfCoins = (availableCoins / coinValue).toFixed(0);

    const returnedCoins = Math.min(
      numberOfCoins,
      Math.floor(changeDue / coinValue)
    );

    if (returnedCoins > 0) {
      const returnedValue = returnedCoins * coinValue;
      changeArray.push([coinName, returnedValue]);
      changeDue = (changeDue - returnedValue).toFixed(2);
    }
  }

  // Check if unable to return exact change
  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: changeArray };
}

// Example usage:
const result = checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]);

console.log(result);
