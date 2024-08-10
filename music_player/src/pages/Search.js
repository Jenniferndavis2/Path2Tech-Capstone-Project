import React, { useState } from 'react';
import song01 from '../components/song01.mp3';
import song02 from '../components/song02.mp3';
import song03 from '../components/song03.mp3';
import song04 from '../components/song04.mp3';
import song05 from '../components/song05.mp3';
import song06 from '../components/song06.mp3';
import song07 from '../components/song07.mp3';
import song08 from '../components/song08.mp3';
import song09 from '../components/song09.mp3';
import song10 from '../components/song10.mp3';
import album01 from '../components/album01.jpg';
import album02 from '../components/album02.jpg';
import album03 from '../components/album03.jpg';
import album04 from '../components/album04.jpg';
import album05 from '../components/album05.jpg';
import album06 from '../components/album06.jpg';
import album07 from '../components/album07.jpg';
import album08 from '../components/album08.jpg';
import album09 from '../components/album09.jpg';
import album10 from '../components/album10.jpg';


 const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');


const tracks = [
    {
        title: 'Song 1 Title',
        src: song01,
        artist: 'Artist 1',
        album_cover: album01,
        album_title: 'Album 1 Title',
        duration: '2:13',
    },
    {
        title: 'Song 2 Title',
        src: song02,
        artist: 'Artist 2',
        album_cover: album02,
        album_title: 'Album 2 Title',
        duration: '2:11',
    },
    {
        title: 'Song 3 Title',
        src: song03,
        artist: 'Artist 3',
        album_cover: album03,
        album_title: 'Album 3 Title',
        duration: '3:00',
    },
    {
        title: 'Song 4 Title',
        src: song04,
        artist: 'Artist 4',
        album_cover: album04,
        album_title: 'Album 4 Title',
        duration: '2:30',

    },  
    {
        title: 'Song 5 Title',
        src: song05,
        artist: 'Artist 5',
        album_cover: album05,
        album_title: 'Album 5 Title',
        duration: '3:30',
    },
    {
        title: 'Song 6 Title',
        src: song06,
        artist: 'Artist 6',
        album_cover: album06,
        album_title: 'Album 6 Title',
        duration: '2:00',
    },
    {
        title: 'Song 7 Title',
        src: song07,
        artist: 'Artist 7',
        album_cover: album07,
        album_title: 'Album 7 Title',
        duration: '2:45',
    },
    {
        title: 'Song 8 Title',
        src: song08,
        artist: 'Artist 8',
        album_cover: album08,
        album_title: 'Album 8 Title',
        duration: '2:15',
    },
    {
        title: 'Song 9 Title',
        src: song09,
        artist: 'Artist 9',
        album_cover: album09,
        album_title: 'Album 9 Title',
        duration: '2:30',
    },
    {
        title: 'Song 10 Title',
        src: song10,
        artist: 'Artist 10',
        album_cover: album10,
        album_title: 'Album 10 Title',
        duration: '2:45',
    },
  ];  
  const filteredTracks = tracks.filter(track =>
    track.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    track.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );



  return (
    <div className="audio-search">
        <h1>Search for a song</h1>
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
export default Search;