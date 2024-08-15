const burger = document.querySelector('.burger');
const navbarList = document.querySelector('.navbar_list');

burger.addEventListener('click', () => {
  navbarList.classList.toggle('nav-active');
  burger.classList.toggle('toggle');
});
