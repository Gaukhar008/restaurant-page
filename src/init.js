import loadHomePage from './home';
// eslint-disable-next-line import/no-cycle
import loadMenuPage from './menu';
import loadAboutPage from './about';

function setActiveButton(button) {
  const buttons = document.querySelectorAll('.nav__item');

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove('active');
    }
  });

  button.classList.add('active');
}

const createHeaderNav = () => {
  const nav = document.createElement('nav');

  const homeButton = document.createElement('button');
  homeButton.classList.add('nav__item');
  homeButton.textContent = 'Home';
  homeButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(homeButton);
    loadHomePage();
  });

  const menuButton = document.createElement('button');
  menuButton.classList.add('nav__item');
  menuButton.textContent = 'Menu';
  menuButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(menuButton);
    loadMenuPage();
  });

  const aboutButton = document.createElement('button');
  aboutButton.classList.add('nav__item');
  aboutButton.textContent = 'About';
  aboutButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(aboutButton);
    loadAboutPage();
  });

  const contactsButton = document.createElement('button');
  contactsButton.classList.add('nav__item');
  contactsButton.textContent = 'Contacts';
  contactsButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(contactsButton);
    // тут должна быть функция для загрузки страницы About
  });

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(aboutButton);
  nav.appendChild(contactsButton);

  return nav;
};

const createHeader = () => {
  const header = document.createElement('header');
  const headerLeft = document.createElement('div');
  const headerRight = document.createElement('div');
  const restaurantName = document.createElement('div');
  const h1 = document.createElement('h1');

  headerLeft.classList.add('header__left');
  headerRight.classList.add('header__right');
  restaurantName.classList.add('restaurant-name');

  h1.textContent = 'K-WOK Cafe';
  h1.addEventListener('click', () => {
    loadHomePage();
  });

  restaurantName.appendChild(h1);
  headerLeft.appendChild(restaurantName);
  headerRight.appendChild(createHeaderNav());
  header.appendChild(headerLeft);
  header.appendChild(headerRight);

  return header;
};

function createMain() {
  const main = document.createElement('main');
  main.classList.add('main');
  main.setAttribute('id', 'main');
  return main;
}

const createFooter = () => {
  const footer = document.createElement('footer');
  const copyright = document.createElement('p');
  copyright.textContent = 'K-WOK Cafe © 2022 | All Rights Reserved';
  footer.appendChild(copyright);

  return footer;
};

const init = () => {
  const content = document.getElementById('content');

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  setActiveButton(document.querySelector('.nav__item'));
  loadHomePage();
};

export default init;
