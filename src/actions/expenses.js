import uuid from 'uuid';
import { database } from '../firebase/firebase';

export const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return dispatch => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = Date.now()
    } = expenseData;

    const expense = { description, note, amount, createdAt };
    return database
      .ref('/expenses')
      .push(expense)
      .then(ref => dispatch(addExpense({ id: ref.key, ...expense })));
  };
};

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  expense: { ...updates, id }
});

export const removeExpense = ({ id = '' } = {}) => ({
  type: 'REMOVE_EXPENSE',
  expense: { id }
});

export const setExpenses = expenses => ({
  type: 'SET_EXPENSE',
  expenses
});

export const startSetExpenses = () => {
  return dispatch => {
    return database
      .ref('/expenses')
      .once('value')
      .then(snapshot => {
        const rawData = snapshot.val();
        const expenses = Object.keys(rawData).reduce((prev, current) => {
          prev.push({ ...rawData[current], id: current });
          return prev;
        }, []);

        return dispatch(setExpenses(expenses));
      });
  };
};
