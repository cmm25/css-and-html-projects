const footer = document.querySelector('.footer');

function showFooter() {
  const scrollPosition = window.innerHeight + window.pageYOffset;
  const documentHeight = document.documentElement.scrollHeight;

  if (scrollPosition >= documentHeight) {
    footer.style.opacity = '1';
    footer.style.pointerEvents = 'auto';
    footer.style.transform = 'translateY(0)';
  } else {
    footer.style.opacity = '0';
    footer.style.pointerEvents = 'none';
    footer.style.transform = 'translateY(100%)';
  }
}

window.addEventListener('scroll', showFooter);
