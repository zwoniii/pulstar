import './scss/style.scss';
import './scss/_global.scss';
import './scss/_reset.scss';

const swiper = new Swiper('.shop__slider', {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});