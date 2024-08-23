import React from "react";
import "./queue.css";
function Queue({ tracks, setCurrentIndex }) {
  console.log(tracks);
  return (
    <div className="queue-container flex">
      <div className="queue flex">
        <p className="upNext">Up Next</p>
        <div className="queue-list">
          {tracks.map((track,index) => (
            <div className="queue-items" onClick={()=>setCurrentIndex(index)}>
              <p className="trackName">{track?.track?.name}</p>
              <p className="duration">0:30</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Queue;
