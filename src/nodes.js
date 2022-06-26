const charactersList = document.querySelector('#characters-list');
const comicsList = document.querySelector('#comics-list');
const eventsList = document.querySelector('#events-list');
const mainInformation = document.querySelector('#id-information');

const charactersCardsContainer = document.getElementById('characters-cards');
const comicsCardsContainer = document.getElementById('comics-cards');
const eventsCardsContainer = document.getElementById('events-cards');
const [related1, related2] = [...document.querySelectorAll('.relationship-list .cards-container')];

const headerSecundaryTitle = document.getElementById('secundary-title');
const mainImage = document.getElementById('id-image');
const mainText = document.querySelector('#id-information p');
const moreDetails = document.querySelector('span a');
const [relatedTitle1, relatedTitle2] = [...document.querySelectorAll('.relationship-list .relationship-list--title')];