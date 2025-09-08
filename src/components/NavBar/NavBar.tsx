"use client";
import { useEffect, useState } from "react";
import "./NavBar.css";
import { IoClose, IoSearch } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Link from "next/link";
import NavLink from "./NavLink";

const NavBar = () => {
  const [isShow, setIsShow] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [isDropDownShowed, setIsDropDownShowed] = useState(false);
  const [isAccordionShowed, setIsAccordionShowed] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMenu(window.innerWidth <= 991);
    }
  }, []);
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img src="/assets/images/Isolation_Mode.svg" alt="EduPress" />
          <span className="text">EduPress</span>
        </div>
        <ul className="links">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/courses">Courses</NavLink>
          </li>
          <li>
            <NavLink href="/blog">Blog</NavLink>
          </li>
          <li className="page">
            <p
              style={{ margin: "0px", cursor: "pointer" }}
              onClick={() => setIsDropDownShowed((prev) => !prev)}
            >
              Page
              {isDropDownShowed ? (
                <IoIosArrowUp className="menu-arrow" />
              ) : (
                <IoIosArrowDown className="menu-arrow" />
              )}
            </p>
            <ul className={isDropDownShowed ? "show drop-down" : "drop-down"}>
              <li>
                <NavLink href="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink href="/faqs">Faqs</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink href="/theme">Premium Theme</NavLink>
          </li>
        </ul>
        <div className="register">
          <NavLink href="/auth">Login / Register</NavLink>
          <div className="search">
            <IoSearch />
          </div>
        </div>
        {isMenu && (
          <TiThMenu className="burger-icon" onClick={() => setIsShow(true)} />
        )}
        <div className="sidebar" style={{ right: isShow ? "0px" : "-100%" }}>
          <div className="sub-header">
            <img src="/assets/images/Isolation_Mode.svg" alt="EduPress" />
            <IoClose className="close" onClick={() => setIsShow(false)} />
          </div>
          <ul>
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/courses">Courses</NavLink>
            </li>
            <li>
              <NavLink href="blog">Blog</NavLink>
            </li>
            <li className="page">
              <a
                href=""
                style={{ margin: "0px", cursor: "pointer" }}
                onClick={(e) => {
                  e.preventDefault();
                  setIsAccordionShowed((prev) => !prev);
                }}
              >
                Page
                {isAccordionShowed ? (
                  <IoIosArrowUp className="menu-arrow" />
                ) : (
                  <IoIosArrowDown className="menu-arrow" />
                )}
              </a>
              <ul
                className={isAccordionShowed ? "show drop-down" : "drop-down"}
              >
                <li>
                  <NavLink href="/contact">Contact</NavLink>
                </li>
                <li>
                  <NavLink href="/faqs">Faqs</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink href="/theme">Premium Theme</NavLink>
            </li>
          </ul>
          <div className="search">
            <input type="text" placeholder="Search" />
            <IoSearch className="icon" />
          </div>
          <NavLink className="button" href="/auth">
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
