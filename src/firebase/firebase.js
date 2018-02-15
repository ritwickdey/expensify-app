import * as firebase from 'firebase';
const config = {
  apiKey: process.env.FIRE_API_KEY,
  authDomain: process.env.FIRE_AUTH_DOMAIN,
  databaseURL: process.env.FIRE_DATABASE_URL,
  projectId: process.env.FIRE_PROJECT_ID,
  storageBucket: process.env.FIRE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIRE_MESSAGINGSENDER_ID
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
