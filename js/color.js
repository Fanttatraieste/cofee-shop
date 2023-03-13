(() => {
  const footerMode = document.querySelector(".footer");
  const openMenuBtn = document.querySelector(".footer__btn__open");
  const closeMenuBtn = document.querySelector(".footer__btn__close");

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    footerMode.classList.toggle("is-open");
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);
})();
