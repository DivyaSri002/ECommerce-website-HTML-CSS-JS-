// Select the hamburger icon and nav links
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

// Toggle the 'active' class on click
menuIcon.addEventListener('click', () => {
    // Toggle the 'active' class for both the nav-links and the menu-icon
    navLinks.classList.toggle('active');
});

window.addEventListener('click', function(e) {
    if (!navLinks.contains(e.target) && !menuIcon.contains(e.target)) {
      navLinks.classList.remove('active');
    }
  });