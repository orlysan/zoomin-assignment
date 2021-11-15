import React, { useEffect ,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesList } from '../../redux/actions/actions';
import axios from 'axios';
import { ListGroup, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import './Toc.css'
import Button from '@restart/ui/esm/Button';


function Toc (){

    const movies = useSelector((state) => state.allMovies.movies);
    const dispatch = useDispatch();

    const fetchFilmsList = async () => {
        const res = await axios
        .get('https://swapi.dev/api/films')
        .catch((err) => {
            handleShow(err)
        });
        dispatch(getMoviesList(res.data.results))
    }
    
    useEffect(() => {
        fetchFilmsList()
    }, [])

    function findMovie(item){
        console.log(item.episode_id)
    }

    const mapList = movies.map( movie => {
        return (
        <ListGroup.Item 
            key={movie.episode_id} 
            onClick={(e) => findMovie(movie, e)}>
                {movie.title}
        </ListGroup.Item>
        )
    })
    
    //modeal error function
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <ListGroup variant="flush">
            {mapList}  

             <Modal show={show} onHide={handleClose}>
                <Modal.Body>Somethig wrong with the link... </Modal.Body>
            <Button variant="secondary" onClick={handleClose}>Close</Button>      
            </Modal> 

        </ListGroup>   
    )
}

const mapStateToProps = (state) => {
    return {
        allMovies: state.movies,
    }
}

export default connect(mapStateToProps)(Toc); 