import React from "react";
import { FaHeadphones, FaRegClock, FaHeart, FaRegHeart } from "react-icons/fa";
//import Songs from "./Songs";

function AudioList() {
  return (
    <div className="audioList">
      <h2 className="title">
        The list <span>12 songs</span>
      </h2>
      <div className="songsContainer">
        {
            Songs && Songs.map((song, index) => (
                
            ))
        }
        <div className="songs">
          <div className="count">#01</div>
          <div className="song">
            <div className="imgBox">
              <img src="" alt="" />
            </div>
            <div className="section">
              <p className="songName">
                Take me on
                <span className="spanArtist">Artist Name</span>
              </p>
              <div className="hits">
                <p className="hit">
                  <i>
                    <FaHeadphones />
                  </i>
                  95,490,102
                </p>
                <p className="duration">
                  <i>
                    <FaRegClock />
                  </i>
                  03.04
                </p>
                <div className="favourite">
                  <i>
                    <FaHeart />
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export { AudioList };
