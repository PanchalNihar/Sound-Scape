import React, { useEffect, useState } from "react";
import apiClient, { setClientToken } from "../../Spotify";
import "./library.css";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
function Library() {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setClientToken(token);

      apiClient
        .get("me/playlists")
        .then((response) => {
          setPlaylists(response.data.items);
          // console.log(response.data.items);
        })
        .catch((error) => {
          console.error("Error fetching playlists:", error);
        });
    } else {
      console.error("Access token is missing");
    }
  }, []);
  const navigate = useNavigate();
  const playPlaylist = (id) => {
    navigate("/player", { state: { id: id } });
  };
  return (
    <div className="screen-container">
      <div className="library-body">
        {playlists ? (
          playlists.map((playlist) => (
            <div
              key={playlist.id}
              className="playlist-card"
              onClick={() => {
                playPlaylist(playlist.id);
              }}
            >
              {playlist.images ? (
                <img
                  src={playlist.images[0].url}
                  className="playlist-image"
                  alt={`${playlist.name} cover`}
                />
              ) : (
                <div className="playlist-placeholder">No Image</div>
              )}
              <p className="playlist-title">{playlist.name} </p>
              <p className="playlist-subtitle">{playlist.tracks.total}Songs</p>
              <div className="playlist-fade">
                <IconContext.Provider
                  value={{ size: "50px", color: "#E99D72" }}
                >
                  <AiFillPlayCircle />
                </IconContext.Provider>
              </div>
            </div>
          ))
        ) : (
          <div>Loading playlists...</div>
        )}
      </div>
    </div>
  );
}

export default Library;
