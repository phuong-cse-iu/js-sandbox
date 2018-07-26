const items = document.getElementsByClassName('collection-item');

console.log(items[0]);

items[0].style.color = 'red';
items[3].textContent = 'Hello';

let listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems);

// Convert HTML collection into array
listItems = Array.from(listItems);

console.log(listItems);

listItems.forEach( (item, index) => {
  console.log(item.className);
  item.textContent = `${index}: Hello`;
});

const newItems = document.querySelectorAll('ul.collection li.collection-item');

console.log(newItems);

newItems.forEach((item, index) => {
  item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');

const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach( (li, index) => {
  li.style.background = '#ccc';
});