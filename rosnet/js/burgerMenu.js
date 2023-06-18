const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  navLinks.classList.toggle('show');
});

function toggleNav() {
  const navContainer = document.getElementById('navContainer');
  navContainer.classList.toggle('show');
}

burgerMenu.addEventListener('click', toggleNav);
