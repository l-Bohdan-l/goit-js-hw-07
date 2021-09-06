const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const liArray = [];
const galleryEl = document.querySelector('#gallery');
galleryEl.style.display = 'flex';
galleryEl.style.flexWrap = 'wrap';
galleryEl.style.listStyle = 'none';
galleryEl.style.marginTop = '20px';
galleryEl.style.marginBottom = '20px';
galleryEl.style.alignItems = 'center';
galleryEl.style.justifyContent = 'space-evenly';

images.forEach(image => {
  const liEl = `<li> <img src = ${image.url} alt = '${image.alt}' width = '1260px' height = '750px'> </li>`;
  liArray.push(liEl);
})

galleryEl.insertAdjacentHTML('afterbegin', liArray.join(''));
