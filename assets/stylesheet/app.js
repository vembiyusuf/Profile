document.addEventListener("scroll", () => {
  const navbar = document.querySelector(".nav");

  if (window.scrollY >= 60) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
