 import theprojectcomponents from './components/theprojectcomponents.js';


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


// creating the vue app
const { createApp } = Vue

// /scripts/json.php

createApp({
  created() {
    
      // creating a fetch call from script/json.php to get the data from the database
      fetch('./scripts/json.php')
      .then(res => res.json())
      .then(data => {
          console.log(data);
          this.portfolioData = data;
      })
      .catch((err) => {

          console.error(err);
      })
  },



  data() {
      return {
          portfolioData: {},
      }
  },

  components: {
      portfoliothumbnail: theprojectcomponents,
          // Lightbox: LightBox
  }
}).mount('#app');



