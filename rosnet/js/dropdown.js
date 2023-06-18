document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');
  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  const burgerMenu = document.querySelector('.burger-menu');
  const navLinks = document.querySelector('.nav-links');

  dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('a');
    const links = dropdown.querySelector('.links');

    if (isMobile) {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        if (burgerMenu.classList.contains('active')) {
          links.style.display = (links.style.display === 'flex') ? 'none' : 'flex';
        }
      });
    } else {
      dropdown.addEventListener('mouseenter', () => {
        if (!burgerMenu.classList.contains('active')) {
          links.style.display = 'flex';
        }
      });

      dropdown.addEventListener('mouseleave', () => {
        if (!burgerMenu.classList.contains('active')) {
          links.style.display = 'none';
        }
      });
    }
  });

  burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navLinks.classList.toggle('show');
    dropdowns.forEach(dropdown => {
      const links = dropdown.querySelector('.links');
      if (burgerMenu.classList.contains('active')) {
        links.style.display = 'none';
      }
    });
  });
});
