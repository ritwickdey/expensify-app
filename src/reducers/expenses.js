const expensesReducerDefaultState = () => [];

export const expensesReducer = (
  state = expensesReducerDefaultState(),
  action
) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(e => e.id !== action.expense.id);
    case 'EDIT_EXPENSE':
      return state.map(
        e =>
          e.id === action.expense.id
            ? { ...e, ...action.expense, id: action.expense.id }
            : e
      );
    default:
      return state;
  }
};
