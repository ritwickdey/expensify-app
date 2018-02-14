import moment from 'moment';

export const getFilteredExpense = (
  expenses = [],
  { endDate, startDate, sortBy = 'date', text = '' } = {}
) => {
  return expenses
    .filter(expense => {
      const createdAtMoment = moment(expense.createdAt);
      const startDateMatch = !startDate
        ? true
        : startDate.isSameOrBefore(createdAtMoment);
      const endDateMatch = !endDate
        ? true
        : endDate.isSameOrAfter(createdAtMoment);

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
