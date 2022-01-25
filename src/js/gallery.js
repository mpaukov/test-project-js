import ServiceAPI from './ServiceAPI';
import galleryItem from '../templates/gallery-card';

const loadService = new ServiceAPI();
const gallery = document.querySelector('.gallery__list');

const observer = new IntersectionObserver(callbackObserver, {
  root: null,
  threshold: 1.0,
});

function callbackObserver(entries, observer) {
  if (entries[0].isIntersecting) {
    observer.unobserve(entries[0].target);
    loadMovie();
  }
}

function loadMovie() {
  loadService
    .getMovie('trending/all/day')
    .then(dataProcessing)
    .catch(error => {
      console.log(error);
    });
}

function dataProcessing(data) {
  gallery.insertAdjacentHTML('beforeend', markup(data));
  observer.observe(gallery.lastElementChild);
  loadService.incrementPage();
}

function markup(data) {
  return galleryItem(data.results);
}

loadMovie();
