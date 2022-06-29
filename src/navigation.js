const home = () => {
    charactersList.classList.remove('delete');
    comicsList.classList.remove('delete');
    eventsList.classList.remove('delete');
    mainImage.classList.add('delete');
    mainInformation.classList.add('delete');
    headerSecundaryTitle.classList.add('delete');

    getCharacteres();
    getComics();
    getEvents();
    homeButton();
}

const idPage = () => {
    charactersList.classList.add('delete');
    comicsList.classList.add('delete');
    eventsList.classList.add('delete');
    mainInformation.classList.remove('delete');
    headerSecundaryTitle.classList.remove('delete');
    mainImage.classList.remove('delete');

    const [url, id] = location.hash.split('=')
    const [,type] = url.split('#');
    console.log(type);
    getElementById(id, type);
    homeButton();
}

const navigatorF = () => {
    if(location.hash) { /* si al menos tiene algo */
    console.log('tiene algo');
    idPage();
    } else {
        console.log('string vacio');
        home();
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.addEventListener('DOMContentLoaded', navigatorF);
window.addEventListener('hashchange', navigatorF);