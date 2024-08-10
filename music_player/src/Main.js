import React from 'react';
import './App.css';

const Main = ({tracks,setCurrentTrackIndex}) => {
  return (
    <>
    <div className="header_welcome">Welcome back</div><br />
    {/* <ul className="track-list">
        {tracks.map((track, index) => (
          <li key={index} className="track-item">
            <h2>{track.title}</h2>
            <h3>{track.artist}</h3>
            <img src={track.album_cover} alt={track.album_title} className='album-art'/>
            
          </li>
        ))}
      </ul> */}
      <p>
        <ol>
          {tracks.map((track, index) => (
            <li onClick={()=>setCurrentTrackIndex(index)} key={index} className='playlist_track'>
                <div className='left'>
                {index + 1} &nbsp;&nbsp;
                <img src={track.album_cover} alt={`Album cover for ${track.title}`} className='album_cover' /> 
                <div className='playlist_song'><strong>{track.title}</strong><br /> {track.artist}</div> 
                </div>
                <div className='center'>{track.album_title}</div>
                <div className='right'>
                <div className='duration'>{track.duration}</div><br /></div>
            </li>
          ))}
        </ol>
    </p>
    </>
  );
}

export default Main;