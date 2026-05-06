import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  alertMessege,
  galleryList,
  showLoadMoreButton,
  hideLoadMoreButton,
  moreBtn,
} from './js/render-functions';

const form = document.querySelector('.form');
let searchText = null;
let page = 1;

let qountImages = 0;

form.addEventListener('submit', handlerGallery);

async function handlerGallery(event) {
  event.preventDefault();
  searchText = event.target.elements['search-text'].value.trim();
  hideLoadMoreButton();
  clearGallery();
  page = 1;

  if (searchText === '') {
    alertMessege(`field is empty`);
    event.target.reset();
    return;
  }

  showLoader();
  try {
    const data = await getImagesByQuery(searchText, page);
    if (data.hits.length <= 0) {
      alertMessege(
        `Sorry, there are no images matching your search query. Please try again!`
      );
      return;
    }
    galleryList.innerHTML = '';
    createGallery(data.hits, page);
    qountImages += data.hits.length;
    page++;

    if (data.totalHits <= qountImages) {
      hideLoadMoreButton();
      alertMessege(
        "We're sorry, but you've reached the end of search results."
      );
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    alertMessege(error.message);
    console.log(error.message);
  } finally {
    hideLoader();
    event.target.reset();
  }
}

moreBtn.addEventListener('click', handlerLoadMore);

async function handlerLoadMore(event) {
  try {
    const data = await getImagesByQuery(searchText, page);

    createGallery(data.hits);
    page++;
    qountImages += data.hits.length;

    const galleryCard = document.querySelector('.gallery-card');
    const galleryCardHeight = galleryCard.getBoundingClientRect().height;
    window.scrollBy({
      left: 0,
      top: galleryCardHeight,
      behavior: 'smooth',
    });

    if (data.totalHits <= qountImages) {
      hideLoadMoreButton();
      alertMessege(
        "We're sorry, but you've reached the end of search results."
      );
    }
  } catch (error) {
    alertMessege(error.message);
    console.log(error.message);
  } finally {
    hideLoader();
  }
}
