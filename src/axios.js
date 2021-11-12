import axios from 'axios';

export const getFilmsList = () => {
    axios.get('https://swapi.dev/api/films')
    .then(res => {
        console.log(res.data.results)
    })
}
