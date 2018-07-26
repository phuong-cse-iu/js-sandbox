console.log(document.getElementById("task-title"));

// Get things from element
console.log(document.getElementById("task-title").id); // task-title

// Change styling
document.getElementById("task-title").style.background = '#333';

document.getElementById("task-title").style.color = '#fff';

// Change content
document.getElementById("task-title").innerText = 'Task list';

document.getElementById("task-title").innerHTML = '<span style="color: red">Task list</span>';

// document.querySelector()

console.log(document.querySelector('#task-title'));

console.log(document.querySelector('.card-title'));

document.querySelector('li').style.color = 'red';

document.querySelector('li:last-child').style.color = 'blue'; // Last item in list affected

document.querySelector('li:nth-child(3)').style.color = 'yellow';

document.querySelector('li:nth-child(odd)').style.background = '#ccc';