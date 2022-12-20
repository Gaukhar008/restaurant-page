const container = document.getElementById('content');

const createHeader = () => {
  const header = document.createElement('header');
  const headerLeft = document.createElement('div');
  const headerRight = document.createElement('div');
  const restaurantName = document.createElement('div');
  const menu = document.createElement('div');
  const h1 = document.createElement('h1');
  const home = document.createElement('h2');
  const restaurantMenu = document.createElement('h2');
  const about = document.createElement('h2');
  const contact = document.createElement('h2');

  headerLeft.classList.add('header__left');
  headerRight.classList.add('header__right');
  restaurantName.classList.add('restaurant-name');
  menu.classList.add('menu');
  home.classList.add('menu__item');
  restaurantMenu.classList.add('menu__item');
  about.classList.add('menu__item');
  contact.classList.add('menu__item');

  h1.textContent = 'K-WOK Cafe';
  home.textContent = 'Home';
  restaurantMenu.textContent = 'Menu';
  about.textContent = 'About';
  contact.textContent = 'Contact';

  menu.appendChild(home);
  menu.appendChild(restaurantMenu);
  menu.appendChild(about);
  menu.appendChild(contact);
  restaurantName.appendChild(h1);
  headerLeft.appendChild(restaurantName);
  headerRight.appendChild(menu);
  header.appendChild(headerLeft);
  header.appendChild(headerRight);

  return header;
};

const createMain = () => {
  const main = document.createElement('main');
  const mainContent = document.createElement('div');
  mainContent.classList.add('home-content');
  const messageTitle = document.createElement('p');
  messageTitle.classList.add('message-title');
  messageTitle.textContent = 'Anyong Haseyo!';
  const message = document.createElement('p');
  message.classList.add('message');
  message.textContent = 'Visit Us and Experience Authentic Korean Cuisine & Genuine Hospitality at its Best!';

  mainContent.appendChild(messageTitle);
  mainContent.appendChild(message);
  main.appendChild(mainContent);

  return main;
};

const createFooter = () => {
  const footer = document.createElement('footer');
  const copyright = document.createElement('p');
  copyright.textContent = 'K-WOK Cafe © 2022 | All Rights Reserved';
  footer.appendChild(copyright);

  return footer;
};

function setActiveButton(button) {
  const buttons = document.querySelectorAll('.menu__item');

  buttons.forEach(() => {
    if (button !== this) {
      button.classList.remove('active');
    }
  });
  button.classList.add('active');
}

function loadHomePage() {
  container.appendChild(createHeader());
  container.appendChild(createMain());
  container.appendChild(createFooter());

  setActiveButton(document.querySelector('.menu__item'));
}

export { loadHomePage, createHeader, createFooter };
