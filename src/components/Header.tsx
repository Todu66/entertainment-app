import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import movie from "../assets/Movie.png";
import group from "../assets/otx.png";
import rec from "../assets/doted.png";
import tv from "../assets/tv.png";
import saved from "../assets/bookmark.png";
import profile from "../assets/person-header-image.png";
import Bookmarks from "../components/Bookmarks"
const Header = () => {
  return (
    <div className="">
      <nav className="flex flex-row justify-between p-2 bg-[#161D2F]">
        <img src={movie} alt="movie" />
        <div className="flex gap-3 bg-[#161D2F]">
          <Link to="/">
          <img className="w-6 h-full" src={group} alt="group" />

          </Link>
          <img className="w-6" src={rec} alt="group" />
          <img className="w-6" src={tv} alt="group" />
          <div
            className="relative w-6 cursor-pointer"
            
          >
             {/* <Link to="/bookmarks">Bookmarks</Link> */}
             <Link to="/bookmarks">
            <img className="w-full" src={saved} alt="bookmark" />

             </Link>
          </div>
        </div>
        <img className="w-6 rounded-2xl" src={profile} alt="profile" />
      </nav>
      <input
        className="w-4/5 text-[#fff] outline-none"
        placeholder="Search for movies or TV series"
      />
    </div>
  );
};
export default Header;
