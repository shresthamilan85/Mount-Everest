
const menuBurger = document.querySelector(".menu-burger");
const mainNav = document.querySelector(".main-nav");
menuBurger.addEventListener('click',() => {
    if (mainNav.style.display==='none'){
    mainNav.style.display='block';}
    else{mainNav.style.display='none';}
})