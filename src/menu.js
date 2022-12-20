function addMenuItem(name, description) {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const foodName = document.createElement('h3');
  foodName.classList.add('menu-item__name');
  foodName.textContent = name;

  const foodDescription = document.createElement('p');
  foodDescription.classList.add('menu-item__description');
  foodDescription.textContent = description;

  const foodImage = document.createElement('img');
  foodImage.src = `./images/${name.toLowerCase()}.png`;
  foodImage.alt = `${name}`;

  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
}

function loadMenuPage() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(addMenuItem());
}

export default loadMenuPage;
