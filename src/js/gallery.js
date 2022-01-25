import ServiceAPI from './ServiceAPI';
import galleryItem from '../templates/gallery-card';

const loadService = new ServiceAPI();
const gallery = document.querySelector('.gallery__list');

(() => {
  loadService
    .getMovie('now_playing')
    .then(dataProcessing)
    .catch(error => {
      console.log(error);
    });
})();

function dataProcessing(data) {
  gallery.insertAdjacentHTML('beforeend', markup(data));
}

function markup(data) {
  return galleryItem(data.results);
}
