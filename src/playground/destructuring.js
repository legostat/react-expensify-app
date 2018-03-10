//
//  Object destructing
//
// const person = {  
//   name: 'Oleg',
//   age: 34,
//   location: {
//     city: 'Kharkiv',
//     temp: -10
//   }
// };

// const {name: firstName = 'Anonymus', age} = person;
// console.log(`${firstName} is ${age}.`);


// const {temp: temperature, city} = person.location;

// if(city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'It',
//   author: 'Steven King',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

// Array destructuring

const adress = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state = 'New York'] = adress;

console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75' ];

const [itemName,,mediumPrice] = item;

console.log(`Medium ${itemName} costs ${mediumPrice}`);