import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
hideLoader();

form.addEventListener('submit', handlerGallery);

function handlerGallery(event) {
  event.preventDefault();
  const searchText = event.target.elements['search-text'].value.trim();

  clearGallery();

  if (searchText === '') {
    alertMessege(`field is empty`);
    event.target.reset();
    return;
  }

  showLoader();
  getImagesByQuery(searchText)
    .then(data => {
      if (data.length <= 0) {
        alertMessege(
          `Sorry, there are no images matching your search query. Please try again!`
        );
        return;
      }
      createGallery(data);
    })
    .catch(error => {
      console.log(error);
      alertMessege(error.message);
    })
    .finally(() => {
      hideLoader();
      event.target.reset();
    });
}

function alertMessege(message) {
  iziToast.error({
    message: message,
    position: 'topLeft',
  });
}
