import pic from './assets/BuntuProfilePic.jpeg';

const title = document.createElement('h3');
title.textContent = 'Webpack made easy!';

const page = document.querySelector('body');
page.append(title);

const img = new Image();
img.src = pic;
page.appendChild(img);