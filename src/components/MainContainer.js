import React, { useEffect } from "react";
import { FaUsers } from "react-icons/fa";
import "../styles/MainContainer.css";
import { Banner } from "./Banner";
import { AudioList } from "./AudioList";
var MainContainer = () => {
  useEffect(() => {
    const allLi = document.querySelector(".menuList").querySelectorAll("li");
    function changeMenuActive() {
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    allLi.forEach((n) => n.addEventListener("click", changeMenuActive));
  }, []);
  return (
    <div className="mainContainer">
      <Banner />
      <div className="menuList">
        <ul>
          <li>
            <a href="#">Populer</a>
          </li>
          <li>
            <a href="#">Albums</a>
          </li>
          <li>
            <a href="#">Songs</a>
          </li>
          <li>
            <a href="#">Fans</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
        <p>
          <i>
            <FaUsers />
          </i>
          12.3M <span>Followers</span>
        </p>
      </div>
      <AudioList />
    </div>
  );
};
export { MainContainer };
