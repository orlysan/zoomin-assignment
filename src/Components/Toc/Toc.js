import React from 'react';
import { getFilmsList } from '../../axios';

function Toc (){
   
    return (
        <div>
            <h1>TOC</h1>
            <button onClick={getFilmsList}></button>
        </div>
    )
}

export default Toc; 