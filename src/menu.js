function addMenuItem(name, description, imgLocation) {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const foodName = document.createElement('h3');
  foodName.classList.add('menu-item__name');
  foodName.textContent = name;

  const foodDescription = document.createElement('p');
  foodDescription.classList.add('menu-item__description');
  foodDescription.textContent = description;

  const foodImage = document.createElement('img');
  foodImage.classList.add('menu-item_image');
  foodImage.src = imgLocation;
  foodImage.alt = `${name}`;

  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
}

function createMenu() {
  const menuContent = document.createElement('div');
  menuContent.classList.add('menu-content');
  const menu = document.createElement('div');
  menu.classList.add('restaurant-menu');

  const mainDishesBlock = document.createElement('div');
  mainDishesBlock.classList.add('restaurant-menu__block');
  const mainDishesTitle = document.createElement('h1');
  mainDishesTitle.textContent = 'MAIN DISHES';
  menu.appendChild(mainDishesTitle);
  mainDishesBlock.appendChild(
    addMenuItem(
      'CHILLI CHICKEN',
      'Crunchy Korean fried chicken with Chilli',
      '../images/chilli_chicken.png',
    ),
  );
  mainDishesBlock.appendChild(
    addMenuItem(
      'SAM GYE TANG',
      'Korean Traditional Fresh Farm Full Chicken with Ginseng',
      '../images/sam_gye_tang.png',
    ),
  );
  mainDishesBlock.appendChild(
    addMenuItem(
      'HAEMUL RAMYUN',
      'Ramen with Seafood',
      '../images/haemyl_ramyun.png',
    ),
  );
  mainDishesBlock.appendChild(
    addMenuItem(
      'JJAJANGMYEON',
      'Noodles in Black Beans Sauce',
      '../images/jjajangmyun.png',
    ),
  );
  menu.appendChild(mainDishesBlock);

  const soupsBlock = document.createElement('div');
  soupsBlock.classList.add('restaurant-menu__block');
  const soupsTitle = document.createElement('h1');
  soupsTitle.textContent = 'SOUPS';
  menu.appendChild(soupsTitle);
  soupsBlock.appendChild(
    addMenuItem(
      'DUBU HOT POT',
      'Spicy Tofu Hot Pot',
      '../images/dubu_hotpot.png',
    ),
  );
  soupsBlock.appendChild(
    addMenuItem(
      'YUKGAEJANG',
      'Spicy Beef and Vegetables Soup',
      '../images/yukgaejang.png',
    ),
  );
  soupsBlock.appendChild(
    addMenuItem(
      'GALBI TANG',
      'Beef Short Ribs Soup',
      '../images/galbi_tang.png',
    ),
  );
  soupsBlock.appendChild(
    addMenuItem(
      'TTUKBAEGI BULGOGI',
      'Marinated Beef in a Pot',
      '../images/ttukbaegi_bulgogi.png',
    ),
  );
  menu.appendChild(soupsBlock);

  const sauceBasedDishesBlock = document.createElement('div');
  sauceBasedDishesBlock.classList.add('restaurant-menu__block');
  const sauceBasedDishesTitle = document.createElement('h1');
  sauceBasedDishesTitle.textContent = 'SAUCE-BASED DISHES';
  menu.appendChild(sauceBasedDishesTitle);
  sauceBasedDishesBlock.appendChild(
    addMenuItem(
      'TTEOKBOKKI',
      'Stir-fried Rice Cakes in Hot Chili Paste',
      '../images/tteokbokki.png',
    ),
  );
  sauceBasedDishesBlock.appendChild(
    addMenuItem(
      'OJINGEO STIR-FRY',
      'Stir-fried Squid in Spicy Sauce',
      '../images/ojingeo_stir-fry.png',
    ),
  );
  menu.appendChild(sauceBasedDishesBlock);

  const noodlesBlock = document.createElement('div');
  noodlesBlock.classList.add('restaurant-menu__block');
  const noodlesTitle = document.createElement('h1');
  noodlesTitle.textContent = 'NOODLES';
  menu.appendChild(noodlesTitle);
  noodlesBlock.appendChild(
    addMenuItem(
      'MUL NAENGMYUN',
      'Cold Buckwheat Noodles',
      '../images/mul_naengmyun.png',
    ),
  );
  noodlesBlock.appendChild(
    addMenuItem(
      'JAPCHAE',
      'Stir-fried Sweet Potato Noodles and Vegetables',
      '../images/japchae.png',
    ),
  );
  menu.appendChild(noodlesBlock);

  const dessertsBlock = document.createElement('div');
  dessertsBlock.classList.add('restaurant-menu__block');
  const dessertsTitle = document.createElement('h1');
  dessertsTitle.textContent = 'DESSERTS';
  menu.appendChild(dessertsTitle);
  dessertsBlock.appendChild(
    addMenuItem(
      'TRADITIONAL BINGSU',
      'Crunchy shaved ice topped with sweet red beans',
      '../images/traditional_bingsu.png',
    ),
  );
  dessertsBlock.appendChild(
    addMenuItem(
      'CARAMEL BINGSU',
      'Crunchy shaved ice topped with sweet red beans, caramel, and coconut',
      '../images/caramel_bingsu.png',
    ),
  );
  menu.appendChild(dessertsBlock);
  menuContent.appendChild(menu);

  return menuContent;
}

function loadMenuPage() {
  const main = document.querySelector('main');
  main.textContent = '';
  main.appendChild(createMenu());
}

export default loadMenuPage;
