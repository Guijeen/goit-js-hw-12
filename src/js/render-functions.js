import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');
let galleryViewer = new SimpleLightbox('.gallery-card a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createGallery(images) {
  galleryList.innerHTML = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-card">
        <a href=${largeImageURL}>
            <img class="gallery-image" src=${webformatURL} alt=${tags} width="360"/>
        </a>
        <ul class = "gallery-card-details">
            <li class ="details-list">
                <h3>Likes</h3><p>${likes}</p>
            </li>
            <li class ="details-list">
                <h3>Views</h3><p>${views}</p>
            </li>
            <li class ="details-list">
                <h3>Comments</h3><p>${comments}</p>
            </li>
            <li class ="details-list">
                <h3>Downloads</h3><p>${downloads}</p>
            </li>
        </ul>
        </li>`;
      }
    )
    .join('');

  galleryViewer.refresh();
}

function clearGallery() {
  galleryList.innerHTML = '';
}

const loader = document.querySelector('#loader');

function showLoader() {
  loader.classList.add('loader');
}

function hideLoader() {
  loader.classList.remove('loader');
}

export { createGallery, clearGallery, showLoader, hideLoader };
