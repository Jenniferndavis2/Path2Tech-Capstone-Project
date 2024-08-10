import React from 'react';
import './App.css';

const Main = ({tracks}) => {
  return (
    <>
    <div className="header_welcome">Welcome back</div><br />
    <ul className="track-list">
        {tracks.map((track, index) => (
          <li key={index} className="track-item">
            <h2>{track.title}</h2>
            <h3>{track.artist}</h3>
            <img src={track.album_cover} alt={track.album_title} className='album-art'/>
            
          </li>
        ))}
      </ul>
    </>
  );
}

export default Main;