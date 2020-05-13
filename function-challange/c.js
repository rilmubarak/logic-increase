// Make a function to insert an object into an array.
// The object should have properties as below:
//   - firstName, with type of string, and cannot be null
//   - lastName, with type of string, and cannot be null
//   - dob, with type of number, and can be null
//   - address, with type of string, and cannot be null
//   - telephoneNumber, with type of string, and can be null
//   - gender, with type of string, and cannot be null
// The function should be able to validate the object, before inserting it into an array.
// Properties that are allowed to have null value can be left out from the object, or assigned with null value.
// But if they are present and its value is not null, then the value type should be checked.
// You should make it so we can EASILY add more properties to be validated.
// Examples of valid object:
let object = {
     firstName: 'Ariyanto',
     lastName: 'Otnayira',
     dob: 1995,
     address: 'Banyuwangi',
     telephoneNumber: '081341557945',
     gender: 'Male'
   }
let object = {
     firstName: 'Ariyanto',
     lastName: 'Otnayira',
     dob: null,
     address: 'Banyuwangi',
     telephoneNumber: null,
     gender: 'Male'
   }
let object = {
     firstName: 'Ariyanto',
     lastName: 'Otnayira',
     address: 'Banyuwangi',
     gender: 'Male'
   }
// Examples of invalid object:
let object = {
     firstName: 'Ariyanto',
     lastName: 'Otnayira',
     dob: 2000,
     address: 'Banyuwangi',
     telephoneNumber: 081341557945,
     gender: 'Male'
   }
   // Because telephoneNumber should be a string
let object = {
     firstName: 'Ariyanto',
     address: 'Otnayira',
     telephoneNumber: '081341557945',
     gender: 'Male'
   }
   // lastName cannot be left out from object, because it cannot be null
let object = {
     firstName: 'Ariyanto',
     lastName: 'Otnayira',
     address: 'Banyuwangi',
     telephoneNumber: '081341557945',
     gender: null
   }
   // Because gender cannot be null, and it should be a string