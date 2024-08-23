import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Library from "../library/Library";

import Player from "../player/Player";
import "./home.css";
import Side from "../../components/sidebar/Side";
import Login from "../auth/Login";
import { setClientToken } from "../../Spotify";
function Home() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);
  return !token ? (
    <Login />
  ) : (
    <Router>
      <div className="home-container">
        <Side />
        <Routes>
          <Route path="/library" element={<Library />}></Route>

          <Route path="/player" element={<Player />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default Home;
