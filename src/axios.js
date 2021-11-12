import axios from 'axios';

export const getFilmsList = (callbackSuccess , callbackFailur) => {
    axios.get('https://swapi.dev/api/films')
    .then(res => {
        callbackSuccess(res.data.results)
    })
    .catch(res => {
        callbackFailur(res)
    })
}
