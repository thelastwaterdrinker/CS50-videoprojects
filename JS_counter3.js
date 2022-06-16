//here ! means if there is not something in localStorage
if (!localStorage.getItem('counter')){
//if there is no value in the counter, we set it to zero.
  localStorage.setItem('counter', 0);
}

function count() {
//i will get the value from counter storage
  let counter = localStorage.getItem('counter');
  counter++;
  document.querySelector('h1').innerHTML = counter;
  localStorage.setItem('counter', counter);

}
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('h1').innerHTML = localStorage.getItem('counter');
  document.querySelector('button').onclick = count;
})