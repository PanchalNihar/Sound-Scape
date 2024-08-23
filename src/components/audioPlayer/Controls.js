import React from "react";
import { IconContext, iconcontext } from "react-icons";
import { FaBackwardStep } from "react-icons/fa6";
import { FaForwardStep } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa6";
import "./controls.css"
function Controls({ isPlaying, setIsPlaying, handleNext, handlePrev }) {
  return (
    <IconContext.Provider value={{ size: "35px", color: "black" }}>
      <div className="controls-wrapper flex">
        <div className="action-btn" onClick={handlePrev}>
          <FaBackwardStep />
        </div>
        <div className="play-pause-btn flex" onClick={()=>setIsPlaying(!isPlaying)}>
          {isPlaying?<FaPause />:<FaPlay />}
        </div>
        <div className="action-btn" onClick={handleNext}>
          <FaForwardStep />
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Controls;
