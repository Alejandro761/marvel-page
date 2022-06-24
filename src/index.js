// const privateKey = '885df66a8128acb228e18e986b4e7150bd3fc059';

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params: {
        'ts': '1',
        'apikey': 'c8f2e4ce9c32dabec601647d1c31cdd6',
        'hash': '04d0644b58c6e9a641853062e1a9af70',
        'limit': '5'
    }
});

const getCharacteres = async () => {
    const {data} = await api('characters');
    console.log(data.data.results);

    const abominationImg = document.querySelector('img');
    // abominationImg.src = data.data.results[1].thumbnail.path + '.jpg';
}

const getComics = async () => {
    const {data} = await api('comics');
    console.log(data.data);
}

const getSeries = async () => {
    const {data} = await api('series');
    console.log(data.data);
}

getCharacteres();
getComics();
getSeries(); 

