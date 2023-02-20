var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });

const menuIcon = document.querySelector('.header__burger');
const menu = document.querySelector('.menu__list');

menuIcon.addEventListener('click', function() {
  menu.classList.toggle('header-active');

  const spans = menuIcon.querySelectorAll('span');

  if (menu.classList.contains('header-active')) {
    spans[0].style.transform = 'rotate(45deg) translate(7px, 7px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
  } else {
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  }
});