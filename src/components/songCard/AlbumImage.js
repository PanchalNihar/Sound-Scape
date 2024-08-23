import React from "react";
import "./albumimage.css";
function AlbumImage({ url }) {
  return (
    <div className="albumImage flex">
      <img src={url} alt="img" className="albumImage-art" />
      <div className="albumImage-shadow">
        <img src={url} alt="image" className="albumImage-shadow" />
      </div>
    </div>
  );
}

export default AlbumImage;
