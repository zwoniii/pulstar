import './scss/style.scss';
import './scss/_global.scss';
import './scss/_reset.scss';

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  console.log('1 menu', menu);
  console.log('2', [...menu.classList]);
  menu.classList.toggle('menu__list--active');
  console.log('3', [...menu.classList]);
});
