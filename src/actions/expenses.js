import uuid from 'uuid';
import { database } from '../firebase/firebase';

export const getDBPathSaveRef = uid => `/users/${uid}/expenses`;

export const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = Date.now()
    } = expenseData;

    const expense = { description, note, amount, createdAt };
    return database
      .ref(getDBPathSaveRef(uid))
      .push(expense)
      .then(ref => dispatch(addExpense({ id: ref.key, ...expense })));
  };
};

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  expense: { ...updates, id }
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const { description, note, amount, createdAt } = updates;
    return database
      .ref(`${getDBPathSaveRef(uid)}/${id}`)
      .update({
        description,
        note,
        amount,
        createdAt
      })
      .then(() => dispatch(editExpense(id, updates)));
  };
};

export const removeExpense = ({ id = '' } = {}) => ({
  type: 'REMOVE_EXPENSE',
  expense: { id }
});

export const startRemoveExpense = ({ id }) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`${getDBPathSaveRef(uid)}/${id}`)
      .remove()
      .then(() => dispatch(removeExpense({ id })));
  };
};

export const setExpenses = expenses => ({
  type: 'SET_EXPENSE',
  expenses
});

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`${getDBPathSaveRef(uid)}`)
      .once('value')
      .then(snapshot => {
        const rawData = snapshot.val() || {};
        const expenses = Object.keys(rawData).reduce((prev, current) => {
          prev.push({ ...rawData[current], id: current });
          return prev;
        }, []);

        return dispatch(setExpenses(expenses));
      });
  };
};
