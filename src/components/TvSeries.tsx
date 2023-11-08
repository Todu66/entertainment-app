import React from 'react'
import data from "../../data"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

interface TvSeriesProps {
  onBookmarkClick: (movie: Movie) => void;
  initialData: Movie[];
}


const TvSeries: React.FC<TvSeriesProps> = (props) => {
    const { onBookmarkClick} = props;

    const filteredTvSeries = data.filter(item => item.category === "TV Series")
    return (
      <div className='text-[#fff] p-3 sm:grid grid-cols-2 max-md:grid-cols-3  place-items-center lg:w-customwidth'>
        {filteredTvSeries.map((movie, index) => (
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

export default TvSeries
