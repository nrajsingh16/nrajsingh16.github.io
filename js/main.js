document.querySelectorAll("[data-menu-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".site-header")?.classList.toggle("open");
  });
});
