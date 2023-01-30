//add sticky navigator

//activate the hamburger menu and mobile navigation
const hamb = document.querySelector(".hamb");
const nav = document.querySelector(".nav-mobile");

hamb.addEventListener("click", function(){
    hamb.classList.toggle("active");
    nav.classList.toggle("active");
})