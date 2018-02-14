import * as firebase from 'firebase';
const config = {
  apiKey: 'AIzaSyCweh78qe1xM5_qk9I_Mc6gXaXtYwusNyc',
  authDomain: 'ritwick-expensify-app.firebaseapp.com',
  databaseURL: 'https://ritwick-expensify-app.firebaseio.com',
  projectId: 'ritwick-expensify-app',
  storageBucket: 'ritwick-expensify-app.appspot.com',
  messagingSenderId: '542868741971'
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database };

// const database = firebase.database();

// database.ref('/expences').on('value', snapshot => {
//   const rawData = snapshot.val();
//   const result = Object.keys(rawData).reduce((prev, current) => {
//     prev.push({
//       ...rawData[current],
//       id: current
//     });
//     return prev;
//   }, []);
//   console.log(result);
// });
