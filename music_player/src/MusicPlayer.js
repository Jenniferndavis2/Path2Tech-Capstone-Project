import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import './reactstyles2.css';
import song01 from './components/song01.mp3';
import song02 from './components/song02.mp3';
import song03 from './components/song03.mp3';
import song04 from './components/song04.mp3';
import song05 from './components/song05.mp3';
import song06 from './components/song06.mp3';
import song07 from './components/song07.mp3';
import song08 from './components/song08.mp3';
import song09 from './components/song09.mp3';
import song10 from './components/song10.mp3';
import album01 from './components/album01.jpg';
import album02 from './components/album02.jpg';
import album03 from './components/album03.jpg';
import album04 from './components/album04.jpg';
import album05 from './components/album05.jpg';
import album06 from './components/album06.jpg';
import album07 from './components/album07.jpg';
import album08 from './components/album08.jpg';
import album09 from './components/album09.jpg';
import album10 from './components/album10.jpg';



// import { FiPlay, FiPause, FiSkipBack, FiSkipForward } from "react-icons/fi";

const MusicPlayer = ({tracks,currentTrackIndex,setCurrentTrackIndex}) => {
   
    
    
let currentTrack = tracks[currentTrackIndex];
    
  const playTrack = (index) => {
    setCurrentTrackIndex(index);
    };

  const playPrevious = () => {
    const newIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    setCurrentTrackIndex(newIndex);
  };

  const playNext = () => {
    const newIndex = (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(newIndex);
  };

  return (
    <div className='mp_static'>
      <div className="player_details">

          <img src={currentTrack.album_cover} alt={currentTrack.album_title} className="album_covermp" />
          <div className="mp_details">{currentTrack.title}<br /><strong>{currentTrack.artist}</strong></div>
          </div>

      <div className='player_only'>
        <AudioPlayer
        autoPlay={false}
        showSkipControls={true}
        showJumpControls={false}
        onClickPrevious={playPrevious}
        onClickNext={playNext}
        src={tracks[currentTrackIndex].src}
        // onPlay={() => setIsPlaying(true)}
        // onPause={() => setIsPlaying(false)}
      />
      </div>

      {/* <p>
        <ol>
          {tracks.map((track, index) => (
            <li key={index} onClick={() => playTrack(index)} className='playlist_track'>
                <div className='left'>
                {index + 1} &nbsp;&nbsp;
                <img src={track.album_cover} alt={`Album cover for ${track.title}`} className='album_cover' /> 
                <div onClick={() => setIsPlaying(true)} className='playlist_song'><strong>{track.title}</strong><br /> {track.artist}</div> 
                </div>
                <div className='center'>{track.album_title}</div>
                <div className='right'>
                <div className='duration'>{track.duration}</div><br /></div>
            </li>
          ))}
        </ol>
    </p> */}
    </div>
  );
};

export default MusicPlayer;