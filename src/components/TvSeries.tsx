import React from 'react'
import data from "../../data"
const TvSeries = () => {

    const filteredTvSeries = data.filter(item => item.category === "TV Series")
    return (
      <div className='text-[#fff] p-3'>
        {filteredTvSeries.map((movie, index) => (
          <div className="w-44 mb-3" key={index}>
            <div className="w-max">
              <img src={movie.img} alt={movie.name} />
              <h2>{movie.name}</h2>
              <p>Year: {movie.year}</p>
              <p>Category: {movie.category}</p>
              <div className="flex items-center justify-between">
                <p>Rating: {movie.category2}</p>
  
              </div>
            </div>
          </div>
        ))}
      </div>
    )
}

export default TvSeries
