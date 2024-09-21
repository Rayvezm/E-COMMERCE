window.addEventListener('scroll', function() {
    const button = document.querySelector('.btn-back-to-top');
    if (window.scrollY > 100) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  });
  
  const button = document.querySelector('.btn-back-to-top');
  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });