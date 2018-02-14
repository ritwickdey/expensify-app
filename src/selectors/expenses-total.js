export const getExpensesTotal = (expences = []) =>
  expences.reduce((prev, current) => prev + current.amount, 0);




  