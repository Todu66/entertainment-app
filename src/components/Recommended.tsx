import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Movie } from "./Header"; // Import the Movie interface

interface RecommendedProps {
  onBookmarkClick: (movie: Movie) => void;
  initialData: Movie[]; // Pass initial data as a prop
}

const Recommended: React.FC<RecommendedProps> = (props) => {
  const { onBookmarkClick, initialData } = props;
  const [data, setData] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call to fetch data
    setTimeout(() => {
      setData(initialData);
      setLoading(false);
    }, 1000); // Assuming it takes 1 second to fetch data
  }, [initialData]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[100vh] text-white text-[50px]">
        <FontAwesomeIcon icon={faSpinner} spinPulse />
      </div>
    );
  }

  return (
    <div className="text-[#fff] p-3  sm:grid grid-cols-2 place-items-center">
      {/* Mapping through the data received via props */}
      {data.map((card, index) => (
        <div className="relative w-44 mb-3" key={index}>
          <div className="w-max relative">
            <img src={card.img} alt={card.name} />

            <div className="absolute top-2 right-2 p-1 bg-transparent">
              <FontAwesomeIcon
                className="cursor-pointer "
                onClick={() => onBookmarkClick(card)}
                icon={faBookmark}
              />
            </div>

            <div className="flex gap-2 text-base">
              <p>{card.year}</p>
              <p>{card.category}</p>
              <p>{card.category2}</p>
            </div>
            <h2>{card.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recommended;
