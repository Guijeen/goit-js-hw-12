import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  alertMessege,
  galleryList
} from './js/render-functions';



const form = document.querySelector('.form');
let searchText = null
let page = 1
const moreBtn = document.querySelector("#moreBtn")

hideLoader();

form.addEventListener('submit', handlerGallery);


function handlerGallery(event) {
  event.preventDefault();
 searchText = event.target.elements['search-text'].value.trim();

  clearGallery();

  if (searchText === '') {
    alertMessege(`field is empty`);
    event.target.reset();
    return;
  }

  showLoader();  
  getImagesByQuery(searchText, page)
    .then(data => {
      
      if (data.hits.length <= 0) {
        alertMessege(
          `Sorry, there are no images matching your search query. Please try again!`
        );
        return;
      }    
      galleryList.innerHTML =""  
      createGallery(data.hits, page);
      page++
      moreBtn.classList.remove("hidden")
    })
    .catch(error => {
      alertMessege(error.message);
      console.log(error.message);
      
    })
    .finally(() => {
      hideLoader();
      event.target.reset();
    });
}



moreBtn.addEventListener("click", handlerLoadMore)

function handlerLoadMore(event) {
  
   getImagesByQuery(searchText, page)
    .then(data => {
      createGallery(data.hits);
      page++
    })
    .catch(error => {
      alertMessege(error.message);
      console.log(error.message);
      
    })
    .finally(() => {
      hideLoader();
    });
  
}

