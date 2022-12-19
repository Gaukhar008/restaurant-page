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
  container.appendChild(header);
};

export { createHeader };
