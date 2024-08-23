import React, { useEffect, useState } from "react";
import "./widgets.css";
import apiClient from "../../Spotify";
import WidgetCard from "./WidgetCard";
function Widgets({ artistID }) {
  const [similar, setSimilatArtist] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [newRelese, setNewRelese] = useState([]);
  // const id = artistID?.artists[0]?.id;
  useEffect(() => {
    if(artistID){
    apiClient
      .get(`/artists/${artistID}/related-artists`)
      .then((res) => {
        const a = res.data?.artists.slice(0, 3);
        setSimilatArtist(a);
      })
      .catch((err) => console.log(err));
      apiClient
        .get(`/browse/featured-playlists`)
        .then((res) => {
          const a = res.data?.playlists?.items.slice(0, 3);
          setFeatured(a);
        })
        .catch((err) => console.log(err));
      apiClient
        .get(`/browse/new-releases`)
        .then((res) => {
          const a = res.data?.albums?.items.slice(0, 3);
          setNewRelese(a);
        })
        .catch((err) => console.log(err));
      }
  }, [artistID]);
  return (
  <div className="widgets-body flex">
    <WidgetCard title="Similar Artists" similar={similar}/>
    <WidgetCard title="Made For You" featured={featured}/>
    <WidgetCard title="New Releases" newRelease={newRelese}/>
  </div>
);
}

export default Widgets;
