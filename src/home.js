import { createHeader, createFooter } from './init';

const container = document.getElementById('content');

const createMain = () => {
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

  return mainContent;
};

function loadHomePage() {
  container.innerHTML = '';
  const main = document.createElement('main');
  main.appendChild(createMain());

  container.appendChild(createHeader());
  container.appendChild(main);
  container.appendChild(createFooter());
}

export default loadHomePage;
