import React, { useEffect, useState } from "react";
import "./player.css";
import { useLocation } from "react-router-dom";
import apiClient from "../../Spotify";
import SongCard from "../../components/songCard/SongCard";
import Queue from "../../components/Queue/Queue";
import AudioPlayer from "../../components/audioPlayer/AudioPlayer";
import Widgets from "../../components/widgets/Widgets";
function Player() {
  const location = useLocation();
  const [tracks, setTrack] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
  }, [currentIndex, tracks]);
  useEffect(() => {
    if (location.state) {
      apiClient
        .get("playlists/" + location.state?.id + "/tracks")
        .then((res) => {
          setTrack(res.data.items);
          setCurrentTrack(res.data.items[0].track);
          console.log(res.data.items[0]);
        });
    }
  }, [location.state]);

  return (
    <div className="screen-container flex">
      <div className="left-player-body">
        <AudioPlayer
          currentTrack={currentTrack}
          total={tracks}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        <Widgets artistID={currentTrack?.album?.artists[0]?.id}/>
      </div>
      <div className="right-player-body">
        <SongCard album={currentTrack?.album} />
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </div>
    </div>
  );
}

export default Player;
