import React from 'react'

const Main = () => {
  return (
    <div className="App">
      <header className="header">SMJ Audio Player</header>
      <div className="container">
        <div className="player">
          <div className="details">
            <h2 id="title">Song Title</h2>
            <h3 id="artist">Artist</h3>
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
      </div>
    </div>
  )
}

export default Main
