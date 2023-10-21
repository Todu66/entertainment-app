import React from "react";

interface Movie {
  name: string;
  year: string;
  category: string;
  category2: string;
  img: string;
}

const SavedMovies: React.FC<SavedMoviesProps> = ({ savedMovies }) => {
  return (
    <div className="text-[#fff]">
      {savedMovies.map((movie, index) => (
        <div key={index}>
          <img src={movie.img} alt={movie.name} />
          <h2>{movie.name}</h2>
          <p>Year: {movie.year}</p>
          <p>Category: {movie.category}</p>
          <p>Rating: {movie.category2}</p>
        </div>
      ))}
    </div>
  );
};

export default SavedMovies;
