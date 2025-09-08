"use client";
import { IoSearch } from "react-icons/io5";
import "./CoursesControl.css";
import { FaList } from "react-icons/fa";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import { useState } from "react";

const CoursesControl = () => {
  const [isLayoutGrid, setIsLayoutGrid] = useState(true);
  const [searchedKey, setSearchedKey] = useState("");
  return (
    <div className="courses-control">
      <div className="container">
        <h1>All Courses</h1>
        <div className="controllers">
          <div className="search">
            <input
              type="text"
              placeholder="Search"
              value={searchedKey}
              onChange={(e) => setSearchedKey(e.target.value)}
            />
            <IoSearch className="icon" />
          </div>
          <div className="layout">
            <TfiLayoutGrid2Alt
              className={isLayoutGrid ? "grid icon active" : "grid icon "}
              onClick={() => setIsLayoutGrid(true)}
            />
            <FaList
              className={!isLayoutGrid ? "linear icon active" : "linear icon"}
              onClick={() => setIsLayoutGrid(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesControl;
