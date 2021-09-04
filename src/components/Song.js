import React from "react";

function Song({ currentSong }) {
  return (
    <div className="song-container">
      <img src={currentSong.cover}></img>
      <h1>{currentSong.name}</h1>
      <h2>{currentSong.artist}</h2>
    </div>
  );
}

export default Song;
