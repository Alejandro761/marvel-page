const home = () => {
    charactersList.classList.remove('delete');
    comicsList.classList.remove('delete');
    eventsList.classList.remove('delete');
    getCharacteres();
    getComics();
    getEvents();
}

const idPage = () => {
    charactersList.classList.add('delete');
    comicsList.classList.add('delete');
    eventsList.classList.add('delete');
    mainInformation.classList.remove('delete');
    headerSecundaryTitle.classList.remove('delete');

    const [url, id] = location.hash.split('=')
    const [,type] = url.split('#');
    console.log(type);
    getElementById(id, type);
}

const navigator = () => {
    if(location.hash) { /* si al menos tiene algo */
        console.log('tiene algo');
        idPage();
    } else {
        console.log('string vacio');
        home();
    }
}

window.addEventListener('DOMContentLoaded', navigator);
window.addEventListener('hashchange', navigator);