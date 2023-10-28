import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Recommended from "./components/Recommended";
import SavedMovies from "./components/Bookmarks";
import data from "../data"; // Import your default movie data
import "./index.css";

interface Movie {
  name: string;
  year: string;
  category: string;
  category2: string;
  img: string;
}

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredData, setFilteredData] = useState<Movie[]>([]);

  const handleBookmarkClick = (movie: Movie) => {
    setMovies((prevSavedMovies) => [...prevSavedMovies, movie]);
  };

  const handleFilter = (filteredData: Movie[]) => {
    console.log("Filtered Data Received:", filteredData);
    setFilteredData(filteredData);
  };

  return (
    <div>
      <Header onFilter={handleFilter} />
      <Routes>
        {/* Pass filteredData if available, otherwise use default data */}
        <Route
          path="/recomended"
          element={
            <Recommended
              onBookmarkClick={handleBookmarkClick}
              initialData={filteredData.length > 0 ? filteredData : data} // Use filteredData if available, otherwise use default data
            />
          }
        />
        <Route path="/bookmarks" element={<SavedMovies savedMovies={movies} />} />
      </Routes>
    </div>
  );
}

export default App;
