function scrollToTop() {
  const mainBlock = document.getElementById('main-block');
  mainBlock.scrollIntoView({
    behavior: 'smooth'
  });
}

window.addEventListener('scroll', function() {
  const scrollBtn = document.querySelector('.scroll-to-top');
  if (window.pageYOffset > 100) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});