let mobileMenu = document.querySelector(".mobile-menu");
let cross = document.querySelector(".fa-xmark");

function showMenu() {
  mobileMenu.style.right = 0;
  mobileMenu.style.transition = "0.5s";
}

function hideMenu() {
  mobileMenu.style.right = "-50%";
}

// Smooth scroll functionality
document.querySelectorAll(".mobile-menu a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    let targetId = this.getAttribute("href").substring(1);
    let targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      hideMenu();
    }
  });
});
