import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Recommended from "./components/Recommended";
import SavedMovies from "./components/Bookmarks";
import Movies from "./components/Movies"
import TvSeries from "./components/TvSeries"
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
  const [filteredData, setFilteredData] = useState<Movie[]>(data); // Initialize filteredData with default data
  // ---------------------------------------------------------
  
  const handleBookmarkClick = (movie: Movie) => {
    setMovies((prevSavedMovies) => [...prevSavedMovies, movie]);
  };

  const handleFilter = (filteredData: Movie[]) => {
    setFilteredData(filteredData);
  };

  return (
    <div>
      <Header onFilter={handleFilter} />
      <Routes>
        {/* Pass filteredData if available, otherwise use default data */}
        <Route
          path="/Recommended"
          element={
            <Recommended
              onBookmarkClick={handleBookmarkClick}
              initialData={filteredData} // Use filteredData
            />
          }
        />
        <Route
          path="/bookmarks"
          element={<SavedMovies savedMovies={movies} />}
        />
        <Route 
          path="/movies"
          element={<Movies />}
        />
        <Route 
          path="/TvSeries"
          element={<TvSeries />}
        />
      </Routes>
    </div>
  );
}

export default App;
