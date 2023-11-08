import React from "react";

interface Movie {
  name: string;
  year: string;
  category: string;
  category2: string;
  img: string;
}

interface SavedMoviesProps {
  savedMovies: Movie[]; // Specify the type for savedMovies prop as an array of Movie objects
}

const SavedMovies: React.FC<SavedMoviesProps> = ({ savedMovies }) => {
  return (
    <div className="text-[#fff] p-3 sm:grid grid-cols-2 place-items-center lg:w-customwidth">
      {savedMovies.map((movie, index: number) => (
        <div className="mb-3" key={index}>
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
