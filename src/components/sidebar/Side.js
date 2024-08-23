import React, { useEffect, useState } from "react";
import "./sidebar.css";
import SidebarButton from "./SidebarButton";


import { TbPlayerPlay } from "react-icons/tb";

import { TbLibraryPlus } from "react-icons/tb";
import { PiSignOutBold } from "react-icons/pi";
import apiClient from "../../Spotify";
function Side() {
  const [image, setImage] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  useEffect(() => {
    apiClient.get("me").then((response) => {
      const userImage =
        response.data.images && response.data.images[0]
          ? response.data.images[0].url
          : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
      setImage(userImage);
    });
  }, []);
  return (
    <div className="sidebar-container">
      <img src={image} className="profile-image" alt="pfp" />
      <div>
        <SidebarButton title="Player" to="/player" icon={<TbPlayerPlay />} />

        <SidebarButton title="Library" to="/library" icon={<TbLibraryPlus />} />
      </div>
      <SidebarButton title="SignOut" to="" icon={<PiSignOutBold />} />
    </div>
  );
}

export default Side;
