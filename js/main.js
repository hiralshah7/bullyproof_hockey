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


