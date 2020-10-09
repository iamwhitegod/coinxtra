const navToggle = document.querySelector(".navbar__toggle");
const navList = document.querySelectorAll(".navbar__list");

navToggle.addEventListener("click", (e) => {
  navList.forEach((list) => toggle(list, "d-flex"));
});

function toggle(target, clas) {
  target.classList.toggle(clas);
}
