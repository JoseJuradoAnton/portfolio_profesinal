//############ toggle icon narvar  #################

const toggleIcon = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleIcon.onclick = function () {
  dropDownMenu.classList.toggle("open");
};
//############ Funcion para desaparecer el NAVBAR  #################

document.onclick = function (e) {
  if (!dropDownMenu.contains(e.target) && !toggleIcon.contains(e.target)) {
    dropDownMenu.classList.remove("open");
  }
};

//############ toggle icon narvar  #################
const dark = document.querySelector("#contenedor");
const body = document.querySelector("body");
const toggle = document.querySelector("#toggle");

load();

dark.addEventListener("click", (e) => {
  body.classList.toggle("darkMode");
  store(body.classList.contains("darkMode"));

  toggle.classList.toggle("active");
});

//almacenar el cambio y persistir modo
function load() {
  const darkMode = localStorage.getItem("darkMode");

  if (!darkMode) {
    store("false");
  } else if (darkMode === "true") {
    body.classList.add("darkMode");
  }
}

function store(value) {
  localStorage.setItem("darkmode", value);
}

let varContenedor = document.getElementById("contenedor");

varContenedor.addEventListener("click", function cambiar() {
  varContenedor.classList.toggle("container1");
  varContenedor.classList.toggle("container");
});

//############ escritura typed  #################

var type = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Autodidact", "Creative"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
var type1 = new Typed(".heading", {
  strings: ["My `<span>Skills</span>`"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
var type2 = new Typed(".project", {
  strings: ["Proyects `<span> NODE JS , REACT JS </span>`"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
var type3 = new Typed(".contact__me", {
  strings: ["Contact `<span>me !</span>`"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = function () {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

//############ Scroll Section Active link#################
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll=()=>{
//     sections.array.forEach(element => {

//     });
// }

//############  remove toggle icon and navbar when click link #################
