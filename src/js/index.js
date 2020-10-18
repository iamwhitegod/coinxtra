import "../sass/main.scss";
// import "../signup.html";
// import "../login.html";
// import "../forget.html";
import * as dom from "./domManipution/domManipulation";
import * as form from "./validator/validator";

console.log("Webpack is working");

(function funCaller() {
  form.formValidation();
})();
