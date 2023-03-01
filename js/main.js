// import first 






// hamburger menu using navToggle for the icon , data-nav-link for the links and data-navbar for the nav bar

const navToggle = document.querySelector('[data-navbar-toggle]');
const navLinks = document.querySelectorAll('[data-nav-link]');
const navBar = document.querySelector('[data-navbar]');
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
    // stlye the nav bar
    navBar.classList.toggle('navbar-mobile');
    // style the toggle icon
    navToggle.classList.toggle('navbar-toggle-mobile');
    
}
);
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
}
);

// making it work on mobile
            if (window.innerWidth < 768) {
                navBar.classList.add('navbar-mobile');
                navToggle.classList.add('navbar-toggle-mobile');
            } else {
                navBar.classList.remove('navbar-mobile');
                navToggle.classList.remove('navbar-toggle-mobile');
            }



// end of hamburger menu
