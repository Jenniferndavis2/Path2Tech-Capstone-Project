import React, { useState } from 'react';
import './App.css';

const AudioSearch = ({ tracks }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTracks = tracks.filter(track =>
    track.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    track.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="audio-search">
      <input
        type="text"
        placeholder="Search for a song or artist..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <ul className="track-list">
        {filteredTracks.map((track, index) => (
          <li key={index} className="track-item">
            <h2>{track.title}</h2>
            <h3>{track.artist}</h3>
            <audio controls>
              <source src={track.src} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </li>
        ))}
      </ul>
    </div>
  );
};