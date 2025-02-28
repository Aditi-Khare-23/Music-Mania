import React from "react";
//import "../styles/leftMenu.css";
import { BsFillVolumeUpFill, BsMusicNoteList } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";
import Track from "../images/il_340x270.2599822377_55f3.avif";
var TrackList = () => {
  return (
    <div className="trackList">
      <div className="top">
        <img src={Track} alt="" />
        <p className="trackName">
          Sample Name <span className="trackSpan">Artist</span>
        </p>
      </div>
      <div className="bottom">
        <i>
          <BsFillVolumeUpFill />
        </i>
        <input type="range" />
        <i>
          <BsMusicNoteList />
        </i>
        <i>
          <FaDesktop />
        </i>
      </div>
    </div>
  );
}
export { TrackList };
