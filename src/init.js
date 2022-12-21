const createHeader = () => {
  const header = document.createElement('header');
  const headerLeft = document.createElement('div');
  const headerRight = document.createElement('div');
  const restaurantName = document.createElement('div');
  const menu = document.createElement('div');
  const h1 = document.createElement('h1');
  const home = document.createElement('button');
  const restaurantMenu = document.createElement('button');
  const about = document.createElement('button');
  const contact = document.createElement('button');

  headerLeft.classList.add('header__left');
  headerRight.classList.add('header__right');
  restaurantName.classList.add('restaurant-name');
  menu.classList.add('menu');
  home.classList.add('menu__item');
  home.classList.add('menu__item-home');
  restaurantMenu.classList.add('menu__item');
  restaurantMenu.classList.add('menu__item-menu');
  about.classList.add('menu__item');
  about.classList.add('menu__item-about');
  contact.classList.add('menu__item');
  contact.classList.add('menu__item-contact');

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

const createFooter = () => {
  const footer = document.createElement('footer');
  const copyright = document.createElement('p');
  copyright.textContent = 'K-WOK Cafe © 2022 | All Rights Reserved';
  footer.appendChild(copyright);

  return footer;
};

export { createHeader, createFooter };
