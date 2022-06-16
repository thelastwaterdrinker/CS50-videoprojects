let counter = 0;

function count() {
  counter++;
  document.querySelector('h1').innerHTML = counter;

  if (counter % 10 === 0) {
    alert(`your count is ${counter}`);
  }
}
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').onclick = count;
  setInterval(count, 1000);
})