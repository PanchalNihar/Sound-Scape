import React from "react";
import "./albuminfo.css";
function AlbumInfo({ album }) {
  if (!album || !album.artists) {
    return <div>No album information available</div>;
  }
  const artists = [];
  album.artists.forEach((element) => {
    artists.push(element.name);
  });
  return (
    <div className="albuminfo-card">
      <div className="albumName-container">
        <div className="marquee">
        <p>{album.name + " - " + artists?.join(",")}</p>
        </div>
      </div>
      <div className="album-info">
        <p>{`${album?.name} is an ${album?.album_type} by ${artists?.join(
          ","
        )} with ${album?.total_tracks} tracks`}</p>
      </div>
      <div className="album-release">
        <p>Release Date:{album.release_date}</p>
      </div>
    </div>
  );
}

export default AlbumInfo;
