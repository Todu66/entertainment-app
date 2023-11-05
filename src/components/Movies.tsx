import React from 'react'
import data from "../../data"
import {Movie } from "./Header"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";


interface MovieProps {
  onBookmarkClick: (movie: Movie) => void;
  initalData: Movie[];
}

const Movies: React.FC<MovieProps> = (props) => {
  const { onBookmarkClick, initialData } = props;
  const filteredMovies = data.filter(item => item.category === "Movie")
  return (
    <div className='text-[#fff] p-3'>
      {filteredMovies.map((movie, index) => (
        <div className="w-44 mb-3" key={index}>
          <div className="w-max">
            <img src={movie.img} alt={movie.name} />
            <h2>{movie.name}</h2>
            <p>Year: {movie.year}</p>
            <p>Category: {movie.category}</p>
            <div className="flex items-center justify-between">
              <p>Rating: {movie.category2}</p>
              <FontAwesomeIcon
                className="cursor-pointer"
                onClick={() => onBookmarkClick(card)}
                icon={faBookmark}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
 
export default Movies;
