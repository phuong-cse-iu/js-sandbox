// REPLACE ELEMENT

// Create element
const newHeading = document.createElement('h2');
newHeading.id = 'task-title';
newHeading.appendChild(document.createTextNode('Task List'));

// Get old heading 
const oldHeading = document.getElementById('task-title');
// Parent
const cardAction = document.querySelector('.card-action');

// Relace
cardAction.replaceChild(newHeading, oldHeading);


// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[4]);

// CLASSES & ATTR

// Classes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];
let val;
val = link.className;
val = link.classList;
val = link.classList.add('test');
val = link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'https://google.com');
link.setAttribute('title', 'google');
link.removeAttribute('title');
val = link.hasAttribute('title');


console.log(val);