const person = {
  firstName: 'Tran',
  lastName: 'Phuong',
  age: 24,
  email: 'trantuanphuong19941994@gmail.com',
  hobbies: ['music', 'code'],
  address: {
    city: 'New York',
    state: 'Florida'
  },
  getBirthYear: function() {
    return 2018 - this.age;
  }
};

console.log(person['firstName']);
console.log(person['age']);
console.log(person['hobbies']);
console.log(person['address']['city']);
console.log(person.getBirthYear());

const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 27}
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}