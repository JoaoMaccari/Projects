const menu = document.querySelector(".menu-btn");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");


menu.addEventListener('click', ()=>{
    nav.classList.add('open-nav')
})

close.addEventListener('click', ()=>{
    nav.classList.add('close-nav')
})