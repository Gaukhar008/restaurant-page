const createAboutPage = () => {
  const aboutContent = document.createElement('div');
  aboutContent.classList.add('about');
  const aboutWrapper = document.createElement('div');
  aboutWrapper.classList.add('about__wrapper');

  const firstHighlight = document.createElement('div');
  firstHighlight.classList.add('about__highlight');

  const firstHighlightText = document.createElement('div');
  firstHighlightText.classList.add('about__highlight-text');

  const titleFirst = document.createElement('h1');
  titleFirst.classList.add('about__highlight-title');
  titleFirst.textContent = 'Long-Run Korean Restaurant';

  const descriptionFirst = document.createElement('p');
  descriptionFirst.classList.add('about__highlight-description');
  descriptionFirst.textContent = 'With many years of experiences, K-WOK serves authentic and delicious korean food with variety to leave a memorable dining experience.';

  const firstImg = document.createElement('img');
  firstImg.classList.add('about__highlight-img');
  firstImg.src = './images/about_image-first.png';
  firstImg.alt = 'Image of restaurant interior';

  firstHighlightText.appendChild(titleFirst);
  firstHighlightText.appendChild(descriptionFirst);
  firstHighlight.appendChild(firstHighlightText);
  firstHighlight.appendChild(firstImg);

  aboutWrapper.appendChild(firstHighlight);

  const secondHighlight = document.createElement('div');
  secondHighlight.classList.add('about__highlight');

  const secondImg = document.createElement('img');
  secondImg.classList.add('about__highlight-img');
  secondImg.src = './images/about_image-second.png';
  secondImg.alt = 'Image of food';

  const secondHighlightText = document.createElement('div');
  secondHighlightText.classList.add('about__highlight-text');

  const titleSecond = document.createElement('h1');
  titleSecond.classList.add('about__highlight-title');
  titleSecond.textContent = 'Five Star Establishment';

  const descriptionSecond = document.createElement('p');
  descriptionSecond.classList.add('about__highlight-description');
  descriptionSecond.textContent = 'We are rated highly on google review, facebook and blogger platforms for serving freshly made food daily to our customers.';

  secondHighlight.appendChild(secondImg);
  secondHighlightText.appendChild(titleSecond);
  secondHighlightText.appendChild(descriptionSecond);
  secondHighlight.appendChild(secondHighlightText);

  aboutWrapper.appendChild(secondHighlight);

  aboutContent.appendChild(aboutWrapper);

  return aboutContent;
};

function loadAboutPage() {
  const main = document.querySelector('main');
  main.textContent = '';
  main.appendChild(createAboutPage());
}

export default loadAboutPage;
