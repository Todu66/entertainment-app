import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom"; // Use Routes and Route from react-router-dom
import Header from "./components/Header";
import Recommended from "./components/Recommended";
import SavedMovies from "./components/Bookmarks"; // Import the SavedMovies component
import "./index.css"

// ... (Movie and App component declarations remain the same)

function App() {
  const [savedMovies, setSavedMovies] = useState<Movie[]>([]);

  const handleBookmarkClick = (movie: Movie) => {
    setSavedMovies((prevSavedMovies) => [...prevSavedMovies, movie]);
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Recommended onBookmarkClick={handleBookmarkClick} />} />
        <Route path="/bookmarks" element={<SavedMovies savedMovies={savedMovies} />} />
      </Routes>
    </div>
  );
}

export default App;
