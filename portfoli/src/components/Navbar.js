import React, { useState } from "react";

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.classList.toggle("active", window.scrollY > 0);
});

function Navbar() {
  const [show, setshow] = useState(true);
  return (
    <div>
      <div className="header">
        <div className="navbar">
          <ul className="list">
            <a href="#Home">
              <li className="item">Home</li>
            </a>

            <a href="#About">
              <li className="item">About</li>
            </a>
            <a href="#Services">
              <li className="item">Services</li>
            </a>
            <a href="#Projetcs">
              <li className="item">Projects</li>
            </a>

            <a href="#Contact">
              <li className="item">Contact</li>
            </a>
          </ul>
        </div>

        <div className="toggle">
          <svg
            onClick={() => {
              setshow(!show);
            }}
            xmlns="http://www.w3.org/2000/svg"
            className="menu"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>

      {show ? (
        <div className="sidenav">
          <ul className="sidebar">
            <li className="sidenav">
              <a href="#Home">Home</a>
            </li>
            <li className="sidenav">
              <a href="#About">About</a>
            </li>
            <li className="sidenav">
              <a href="#Services">Services</a>
            </li>
            <li className="sidenav">
              <a href="#Projects">Projects</a>
            </li>
            <li className="sidenav">
              <a href="#Blog">Blog</a>
            </li>
            <li className="sidenav">
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default Navbar;
