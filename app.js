// Type conversion
let val;

// Number to string
val = String(555);
val = String(4 + 4);

// Boolean to string
val = String(true);

// Date to string
val = String(new Date());

// Array to string
val = String([1, 2, 3, 4]);

// String to number
val = Number('5.5');
val = Number(true);
val = Number(null);
val = Number('hello');
val = Number([1, 2, 3, 4]);

val = parseInt('100.30');
val = parseFloat('100.10');

const val1 = 5;
const val2 = String(6);
const sum = val1 + val2;

// Output
console.log(sum);
console.log(typeof sum);