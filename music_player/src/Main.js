import React from 'react';
import MusicPlayer from './MusicPlayer';
import './App.css';

const Main = () => {
  return (
    <>
    <div className="header_welcome">Welcome back</div><br />
    <div>
      <MusicPlayer />
      {/* <header className="header">My Audio Player</header>
      <div className="container">
        <div className="player">
          <div className="details">
            <h2 id="title">Song Title</h2>
            <h3 id="artist">Artist</h3>
            <p><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer" className='link'>Testing link.</a></p>
          </div>
          <audio id="audio" controls>
            <source src="song.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <div className="controls">
            <button id="prev">Prev</button>
            <button id="play">Play</button>
            <button id="next">Next</button>
          </div>
        </div>
        <br />
      </div> */}

      <div>
    </div>
    </div>
    </>
  );
}

export default Main;