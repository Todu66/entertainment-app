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
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState<Movie[]>(data); // Initialize filteredData with default data

  const handleBookmarkClick = (movie: Movie) => {
    setMovies((prevSavedMovies) => [...prevSavedMovies, movie]);
  };

  const handleFilter = (filteredData: Movie[]) => {
    setFilteredData(filteredData);
  };

  return (
    <div className="px-2">
      <Header onFilter={handleFilter} searchQuery={searchQuery} />
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
          element={<Movies onBookmarkClick={handleBookmarkClick}/>}
        />
        <Route 
          path="/TvSeries"
          element={<TvSeries onBookmarkClick={handleBookmarkClick} />}
        />
      </Routes>
    </div>
  );
}

export default App;
