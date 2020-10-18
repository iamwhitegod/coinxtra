import swal from "sweetalert";

const navToggle = document.querySelector(".navbar__toggle");
const navList = document.querySelectorAll(".navbar__list");

export const domStrings = {
  form: document.querySelector(".form"),
  fullname: document.querySelector("#fullname"),
  email: document.querySelector("#email"),
  city: document.querySelector("#city"),
  password: document.querySelector("#password"),
  confirmPassword: document.querySelector("#confirmpassword"),
  btn: document.querySelector("#submit"),
  submenu: document.querySelectorAll("#collapse"),
  activeMenu: document.querySelectorAll(".lb"),
  hamMenu: document.querySelector(".nav-bar__ham-menu"),
  sideMenu: document.querySelector(".glo-aside-menu"),
  notification: document.querySelector('.nav-bar__notification'),
  dropHamburger: document.querySelector('.nav-bar__hamburger-menu')
};

if(navToggle) {
  navToggle.addEventListener("click", (e) => {
    navList.forEach((list) => toggle(list, "d-flex"));
  });
}


function toggle(target, clas) {
  target.classList.toggle(clas);
}

if(domStrings.btn) {
  domStrings.btn.addEventListener("click", () => {
    //
    swal({
      text: "Hello world!",
    });
  });
}




/**********************************
 * Sub menu toggle
**************** */
for(let i = 0; i < domStrings.submenu.length; i++) {
  const currentMenu = domStrings.submenu[i];
  currentMenu.parentElement.addEventListener("click", (e) => {
    currentMenu.parentElement.classList.toggle("open-menu");
  })
}


/**********************************
 * Active Menu
**************** */
function colorLink() {
  domStrings.activeMenu.forEach(menu => menu.classList.remove("active-menu"))
  this.classList.add("active-menu")
}

domStrings.activeMenu.forEach(menu => menu.addEventListener("click", colorLink))

/**********************************
 * Mobile menu
**************** */
domStrings.hamMenu.addEventListener("click", () => {
  domStrings.sideMenu.classList.toggle("glo-aside-menu__active");
})


/**********************************
 * Notification
**************** */
if(domStrings.notification) {
  domStrings.notification.addEventListener("click", () => {
    document.querySelector(".widget__notification-dropdown").classList.toggle("uti-dis")
  })
}

/**********************************
 * Hamburger
**************** */
if(domStrings.dropHamburger) {
  domStrings.dropHamburger.addEventListener("click", () => {
    document.querySelector(".widget__dropdown").classList.toggle("uti-dis")
  })
}