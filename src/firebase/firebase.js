import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };






// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// }, (err) => {
//   console.log('Error:', err.message);
// });



// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
    
//     console.log(expenses);
//   });

// database.ref('expenses').push({
//   description: 'Coffee',
//   note: 'Just a cup of coffee',
//   amount: 250,
//   createdAt: 740005
// });

// database.ref('notes/-L7LLcf12G5q0wmvJ4GF').remove();

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python'
// });

// const firebaseNotes = {
//   notes: {
//     asdsadasds: {
//       title: 'First note',
//       body: 'This is my note'
//     },
//     dslkjlkusdiudufsdjfdslj: {
//       title: 'Second note',
//       body: 'This is my node'
//     }
//   }
// }

// const notes = [{
//   id: '12',
//   title: 'First note',
//   body: 'This is my note'
// }, {
//   id: '151ase',
//   title: 'Second note',
//   body: 'This is my node'
// }];

// database.ref('notes').set(notes);
// database.ref('notes/12')

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// }, (err) => {
//   console.log('Error with data fetching', err);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (err) => {
//   console.log('Error with data fetching', err);
// });

// setTimeout(() => {
//   database.ref('age').set(36);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(37);
// }, 10500);


// database.ref('location')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((err) => {
//     console.log('Error fetching data.', err);
//   });

// database.ref().set({
//   name: 'Oleg Kolisnyk',
//   age: 34,
//   stressLevel: 6, 
//   job: {
//     title: 'Software Developer',
//     company: 'ET&T'
//   },  
//   location: {
//     city: 'Kharkiv',
//     country: 'Ukraine'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((err) => {
//   console.log('This failed.', err);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   location: {
//     city: 'Seattle',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data updated!');
// }).catch((err) => {
//   console.log('This failed.', err);
// });

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Remove succeded.')
//   })
//   .catch((err) => {
//     console.log('Remove failed: ' + err.message);
//   });
