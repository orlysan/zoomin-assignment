import React, { useEffect } from 'react';

function FavoriteList(){

	

	useEffect(()=> {
		const addMovie = JSON.parse(
			localStorage.getItem("star-wars-favorite")
		)
		
	})
	return(
		<div>FavoriteList</div>
	)
}

export default FavoriteList;