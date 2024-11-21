

let darkModeBtn = document.querySelector('.darkModeBtn');
console.log("Hello, world!");
let body = document.querySelector('body');
function darkmode() {
  body.classList.toggle('darkmode');
}

darkModeBtn.addEventListener('click', darkmode);


