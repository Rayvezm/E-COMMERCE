document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById("mainNavbar");
  var heroSection = document.querySelector(".hero-section");
  var navLogo = document.getElementById("navLogo");

  function updateNavbar() {
    var heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    if ((window.scrollY > heroBottom - navbar.offsetHeight) || (window.innerWidth <= 991)) {
      navbar.classList.add("navbar-scrolled");
      navLogo.classList.remove("d-none");
    } else if (window.innerWidth > 991) {
      navbar.classList.remove("navbar-scrolled");
      navLogo.classList.add("d-none");
    }
  }

  window.addEventListener("scroll", updateNavbar);
  window.addEventListener("resize", updateNavbar);
  updateNavbar(); 
});

document.addEventListener("DOMContentLoaded", function () {
  new bootstrap.Carousel(document.querySelector("#carrerasSlider"), {
    interval: 3000, 
    wrap: true, 
  });
});
