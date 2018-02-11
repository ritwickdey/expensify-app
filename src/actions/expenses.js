import uuid from 'uuid';

export const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = Date.now()
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  expense: { ...updates, id }
});

export const removeExpense = ({ id = '' } = {}) => ({
  type: 'REMOVE_EXPENSE',
  expense: { id }
});
