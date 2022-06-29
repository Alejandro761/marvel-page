// const privateKey = '885df66a8128acb228e18e986b4e7150bd3fc059';

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params: {
        'ts': '1',
        'apikey': 'c8f2e4ce9c32dabec601647d1c31cdd6',
        'hash': '04d0644b58c6e9a641853062e1a9af70',
        'limit': '20'
    }
});
//funciones chidas
/* h3 es la propiedad del objeto que tiene el nombre, en personajes en name y en comics y eventos es title*/
const elementsForEach = (elements, container, h3, type) => { 
    container.textContent = '';
    elements.forEach(element => {
        const image = document.createElement('img');
        image.src = `${element.thumbnail.path}.${element.thumbnail.extension}`;
        image.className = 'card-image';
        const name = document.createElement('h3'); 
        name.textContent = element[h3];
        const cardContainer = document.createElement('div');
        cardContainer.className = 'card-container';
        cardContainer.append(image, name);
        cardContainer.addEventListener('click', () => {
            console.log(element.id);
            location.hash = `#${type}=${element.id}`;
        })
        container.appendChild(cardContainer);
    });
}

const homeButton = () => {
    const header = document.querySelector('header h1');
    header.addEventListener('click', () => {
        // location.hash = '';
        location.href = '/home/alejandro/Documentos/marvel-page/index.html'; //para redirigir al usuario a otra parte
    });
}

//llamadas a la api
const getCharacteres = async (id = undefined, type = undefined, related = undefined) => {
    if ( id === undefined) {
        const {data} = await api('characters');
        const characters = data.data.results;
        console.log(characters);
        elementsForEach(characters, charactersCardsContainer, 'name', 'characters');
    } else {
        const {data} = await api(`${type}/${id}/characters`);
        console.log(data.data.results);
        elementsForEach(data.data.results, related, 'name', 'characters');
    }
}

const getComics = async (id = undefined, type = undefined, related = undefined) => {
    if ( id === undefined) {
        const {data} = await api('comics');
        console.log(data.data.results);
        elementsForEach(data.data.results, comicsCardsContainer, 'title', 'comics');    
    } else {
        const {data} = await api(`${type}/${id}/comics`);
        console.log(data.data.results);
        elementsForEach(data.data.results, related, 'title', 'comics');
    }
}

const getEvents = async (id = undefined, type = undefined, related = undefined) => {
    if ( id === undefined) {
        const {data} = await api('events');
        console.log(data.data.results);
        elementsForEach(data.data.results, eventsCardsContainer, 'title', 'events');
    } else {
        const {data} = await api(`${type}/${id}/events`);
        console.log(data.data.results);
        elementsForEach(data.data.results, related, 'title', 'events');
    }
}

const getElementById = async (id, type) => {
    const {data} = await api(`${type}/${id}`);
    const element = data.data.results[0];
    console.log(element);

    if (type === 'characters') {
        headerSecundaryTitle.textContent = element.name;
        moreDetails.textContent = element.name;
        relatedTitle1.textContent = 'Participación en Comics';
        getComics(element.id, type, related1);
        relatedTitle2.textContent = 'Eventos Relacionados';
        getEvents(element.id, type, related2);
    } else {
        headerSecundaryTitle.textContent = element.title;
        moreDetails.textContent = element.title;
        relatedTitle1.textContent = 'Personajes que participan';
        getCharacteres(element.id, type, related1);

        if (type === 'comics') {
            relatedTitle2.textContent = 'Eventos Relacionados';
            getEvents(element.id, type, related2);
        } else {
            relatedTitle2.textContent = 'Comics relacionados';
            getComics(element.id, type, related2);
        }
    }

    if (type != 'characters' && element.characters.available === 0){
        relatedTitle1.textContent = 'No hay personajes disponibles';
    }
    
    if (type != 'comics' && element.comics.available === 0){
        if (type === 'characters') {
            relatedTitle1.textContent = 'No hay comics disponibles';
        } else {
            relatedTitle2.textContent = 'No hay comics relacionados';
        }
    }

    if (type != 'events' && element.events.available === 0){
        relatedTitle2.textContent = 'No hay eventos relacionados';
    }

    mainImage.src = `${element.thumbnail.path}.${element.thumbnail.extension}`;
    const ref = document.querySelector('p br');
    const text = document.createTextNode(element.description);
    mainText.insertBefore(text, ref);
    moreDetails.href = element.urls[0].url;
}

const getCharacteresComics = async () => {
    const {data} = await api('characters/1017100/comics');
    console.log(data.data);
}

// getCharacteresComics();