document.addEventListener('DOMContentLoaded', () => {
    // your code here
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarList = document.querySelector('.navbar-list');

navbarToggle.addEventListener('click', () => {
    console.log ('click');
  navbarList.classList.toggle('active');
  navbarToggle.classList.toggle('active');
});
  });


// creating a vue instance for event section so that it can be updated dynamically
