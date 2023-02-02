//add sticky navigator
const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0);
});

//activate the hamburger menu and mobile navigation
const hamb = document.querySelector(".hamb");
const nav = document.querySelector(".nav-mobile");

hamb.addEventListener("click", function(){
    hamb.classList.toggle("active");
    nav.classList.toggle("active");
});