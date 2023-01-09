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
  const main = document.querySelector('main');
  main.textContent = '';
  main.appendChild(createMain());
}

export default loadHomePage;
