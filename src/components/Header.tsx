import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import movie from "../assets/Movie.png";
import group from "../assets/otx.png";
import rec from "../assets/doted.png";
import tv from "../assets/tv.png";
import saved from "../assets/bookmark.png";
import profile from "../assets/person-header-image.png";
import Bookmarks from "../components/Bookmarks";
import { Movie } from "./Recommended";
import data from "../../data";


interface HeaderProps {
  
  onFilter: (filteredData: Movie[]) => void;
}


const Header = (props: HeaderProps) => {
  const { onFilter } = props;
  const [searchQuery, setSearchQuery] = useState("");

  const filterBySearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    const query = event.target.value;
    console.log("Query:", query)
    let updatedList = [...data];
    updatedList = updatedList.filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    });

    onFilter(updatedList); // Pass filtered data back to parent component
    setSearchQuery(query); // Optionally, update local state if needed
  };


  return (
    <div className="">
      {/* -------------start of nav------------- */}
      <nav className="flex flex-row justify-between p-2 bg-[#161D2F]">
        <img src={movie} alt="movie" />
        <div className="flex gap-3 bg-[#161D2F]">
          <Link to="/recomended">
            <img className="w-6 h-full" src={group} alt="group" />
          </Link>
          <img className="w-6" src={rec} alt="group" />
          <img className="w-6" src={tv} alt="group" />
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
        className="w-4/5 text-[#fff] outline-none"
        placeholder="Search for movies or TV series"
        
        value={searchQuery}
        onChange={filterBySearch}
      />
    </div>
  );
};
export default Header;
