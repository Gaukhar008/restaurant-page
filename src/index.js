import loadHomePage from './home';
// eslint-disable-next-line import/no-cycle
import loadMenuPage from './menu';
import 'normalize.css';
import './style.scss';

function switchPagesOnClick() {
  const homeBtn = document.querySelector('.menu__item-home');
  const menuBtn = document.querySelector('.menu__item-menu');

  homeBtn.addEventListener('click', loadHomePage);
  menuBtn.addEventListener('click', loadMenuPage);
}

function init() {
  loadHomePage();
  switchPagesOnClick();
}

init();
