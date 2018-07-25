// String 

const firstName = "Tran";
const lastName = "Phuong";
const age = 24;

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Tran ';
val += 'Phuong';

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Concat
val = firstName.concat(' ', lastName,' ', age);

// indexOf()
val = firstName.indexOf('a');

// charAt()
val = firstName.charAt('2');

// last character
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4); // Tran

// slice()
val = firstName.slice(0, 4); // Tran

// replace()
val = firstName.replace('Tran', 'Tuan'); // Tuan

// includes()
val = firstName.includes('n');

console.log(val);