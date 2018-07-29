document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(ev) {

  let val;
  val = ev;
  val.target.textContent = 'Hello';


  // Event type
  val = ev.type;

  // Coords event relative to the window
  val = ev.clientY;

  // Coords event relative to the element
  val = ev.offsetY;
  console.log(val);
  ev.preventDefault();
}