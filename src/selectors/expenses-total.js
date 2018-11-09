export default expenses =>
  expenses
    .map(expense => expense.amount)
    .reduce((prev, curr) => prev + curr, 0);
