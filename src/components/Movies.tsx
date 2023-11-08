import React from 'react'
import data from "../../data"
import {Movie } from "./Header"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";


interface MovieProps {
  onBookmarkClick: (movie: Movie) => void;
  initialData: Movie[];
}

const Movies: React.FC<MovieProps> = (props) => {
  const { onBookmarkClick} = props;
  const filteredMovies = data.filter(item => item.category === "Movie")
  return (
    <div className='text-[#fff] p-3 sm:grid grid-cols-2 place-items-center lg:w-customwidth'>
      {filteredMovies.map((movie, index) => (
        <div className="w-44 mb-3" key={index}>
          <div className="w-max relative">
            <img src={movie.img} alt={movie.name} />
            <div className="absolute top-2 right-2 p-1 bg-transparent">
              <FontAwesomeIcon
                className="cursor-pointer "
                onClick={() => onBookmarkClick(movie)}
                icon={faBookmark}
              />
            </div>

            <div className="flex gap-2 text-base">
              <p>{movie.year}</p>
              <p>{movie.category}</p>
              <p>{movie.category2}</p>
            </div>
            <h2>{movie.name}</h2>
          </div>
        </div>
      ))}
    </div>
  )
}
 
export default Movies;
