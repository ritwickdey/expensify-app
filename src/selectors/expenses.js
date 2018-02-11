export const getFilteredExpense = (
  expenses,
  { endDate, startDate, sortBy = 'date', text = '' }
) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== 'number' || expense.createdAt >= startDate;

      const endDateMatch =
        typeof endDate !== 'number' || expense.createdAt <= endDate;

      const textMatch = expense.description
        .trim()
        .toLowerCase()
        .includes(text.trim().toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'amount') return a.amount < b.amount ? 1 : -1;

      return a.createdAt < b.createdAt ? 1 : -1;
    });
};
