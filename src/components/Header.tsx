import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import movie from "../assets/Movie.png";
import group from "../assets/otx.png";
import rec from "../assets/doted.png";
import tv from "../assets/tv.png";
import saved from "../assets/bookmark.png";
import profile from "../assets/person-header-image.png";

import { Movie } from "./Recommended";

import data from "../../data";

interface HeaderProps {
  onFilter: (filteredData: Movie[]) => void;
  searchQuery: string;
  filterBySearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header: React.FC<HeaderProps> = (props) => {

  const { onFilter, searchQuery, filterBySearch } = props;



  return (
    <div className="flex h-auto flex-col  lg:w-10 ">
      {/* -------------start of nav------------- */}
      <nav className="flex flex-row justify-between p-2 items-center bg-[#161D2F] lg:flex-col lg:h-screen h-auto rounded-xl">
        <div>
        <img src={movie} alt="movie" />

        </div>
        <div className="flex gap-3 bg-[#161D2F] lg:flex-col">
          <Link to="/Recommended">
            <img className="w-6 h-full" src={group} alt="group" />
          </Link>
          <Link to="/movies">
            <img className="w-6 h-full" src={rec} alt="group" />
          </Link>
          <Link to="/TvSeries">
            <img className="w-6 h-full" src={tv} alt="group" />
          
          </Link>
          <div className="relative w-6 cursor-pointer">
            {/* <Link to="/bookmarks">Bookmarks</Link> */}
            <Link to="/bookmarks">
              <img className="w-full" src={saved} alt="bookmark" />
            </Link>
          </div>
        </div>
        <img className="w-6 rounded-2xl" src={profile} alt="profile" />
      </nav>
      {/* // ---------------end of nav--------------- */}

      <input
        className="w-4/5 text-[#fff] outline-none p-1 lg: hidden"
        placeholder="Search for movies or TV series"
        value={searchQuery}
        onChange={filterBySearch}
      />
    </div>
  );
};
export default Header;
