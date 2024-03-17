export function handleAmountIntToFloat(amount: number | string) {
  if (typeof amount === "string") {
    amount = parseFloat(amount);
  }
  return amount.toFixed(2);
}
