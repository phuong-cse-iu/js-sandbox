const name = 'Phuong';
const age = 24;
const job = 'Software Engineering';
const city = 'New york';
let html;

// Without template strings (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age:' + age + '</li><li> ' + job + ' </li><li>City: ' + city + '</li></ul>';

// With template strings (es6)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
  </ul>

`;

document.body.innerHTML = html;
