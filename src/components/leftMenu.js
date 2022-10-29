import React from 'react'

import "../styles/leftMenu.css";

import { FaSpotify, FaEllipsisH } from "react-icons/fa";

var LeftMenu = () => {
  return (
  <div className="leftMenu">
      <div className="logoContainer">
        <i>
          <FaSpotify />
        </i>
        <h2>Spotify</h2>
        <i>
          <FaEllipsisH /> 
        </i>
      </div>
      <div className="searchBox"></div>
  </div>
  );
}

export { LeftMenu };