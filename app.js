
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.nav');
let menuItem = document.querySelectorAll('.nav__link');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})


menuItem.forEach (function(menuItem) {
  menuItem.addEventListener('click',function(){
          menuBtn.classList.toggle('active');
          menu.classList.toggle('active');
  })
})










const burger = document.querySelector('.burger');
const navbarList = document.querySelector('.navbar_list');

burger.addEventListener('click', () => {
  navbarList.classList.toggle('nav-active');
  burger.classList.toggle('toggle');
});



