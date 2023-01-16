const createContactsPage = () => {
  const contactsContent = document.createElement('div');
  contactsContent.classList.add('contacts');
  const contactsWrapper = document.createElement('div');
  contactsWrapper.classList.add('contacts__wrapper');

  const h1Location = document.createElement('h1');
  h1Location.textContent = 'OUR LOCATION';
  const map = document.createElement('img');
  map.classList.add('contacts__location-img');
  map.src = '../dist/images/map.png';
  map.alt = 'Location of cafe on map';
  const h3 = document.createElement('h3');
  h3.textContent = '+ 7 778 555 55 55 | kwokcafe@gmail.com';
  const h2SocialNetworks = document.createElement('h2');
  h2SocialNetworks.textContent = 'CONNECT WITH US ON SOCIAL MEDIA';

  const socialNetworks = document.createElement('div');
  socialNetworks.classList.add('contacts__social-networks');

  const facebookLink = document.createElement('a');
  facebookLink.href = 'https://www.facebook.com/';
  const facebookIcon = document.createElement('img');
  facebookIcon.src = 'images/facebook_icon.svg';
  facebookIcon.alt = 'Location of cafe on map';
  facebookLink.appendChild(facebookIcon);

  const instagramLink = document.createElement('a');
  instagramLink.href = 'https://www.instagram.com/';
  const instagramIcon = document.createElement('img');
  instagramIcon.src = 'images/instagram_icon.svg';
  instagramIcon.alt = 'Location of cafe on map';
  instagramLink.appendChild(instagramIcon);

  const tiktokLink = document.createElement('a');
  tiktokLink.href = 'https://www.tiktok.com/';
  const tiktokIcon = document.createElement('img');
  tiktokIcon.src = 'images/tiktok_icon.svg';
  tiktokIcon.alt = 'Location of cafe on map';
  tiktokLink.appendChild(tiktokIcon);

  socialNetworks.appendChild(facebookLink);
  socialNetworks.appendChild(instagramLink);
  socialNetworks.appendChild(tiktokLink);

  contactsWrapper.appendChild(h1Location);
  contactsWrapper.appendChild(map);
  contactsWrapper.appendChild(h3);
  contactsWrapper.appendChild(h2SocialNetworks);
  contactsWrapper.appendChild(socialNetworks);

  contactsContent.appendChild(contactsWrapper);

  return contactsContent;
};

function loadContactsPage() {
  const main = document.querySelector('main');
  main.textContent = '';
  main.appendChild(createContactsPage());
}

export default loadContactsPage;
