import React, { useState } from "react";
import data from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

interface Movie {
  name: string;
  year: string;
  category: string;
  category2: string;
  img: string;
}

interface RecommendedProps {
  onBookmarkClick: (movie: Movie) => void;
}

const Recommended = (props: RecommendedProps) => {
  const { onBookmarkClick } = props;
  const [savedMovies, setSavedMovies] = useState<Movie[]>([]);

  const handleBookmarkClick = (movie: Movie) => {
    setSavedMovies((prevSavedMovies) => [...prevSavedMovies, movie]);
    onBookmarkClick(movie);
  };

  return (
    <div className="text-[#fff] p-3">
      {data.map((card, index) => (
        <div key={index}>
          <img src={card.img} alt={card.name} />
          <h2>{card.name}</h2>
          <p>Year: {card.year}</p>
          <p>Category: {card.category}</p>
          <p>Rating: {card.category2}</p>
          <FontAwesomeIcon
            className="cursor-pointer"
            onClick={() => handleBookmarkClick(card)}
            icon={faBookmark}
          />
        </div>
      ))}
    </div>
  );
};

export default Recommended;