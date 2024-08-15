import AudioPlayer from 'react-h5-audio-player';
import './reactstyles2.css';




// import { FiPlay, FiPause, FiSkipBack, FiSkipForward } from "react-icons/fi";

const MusicPlayer = ({tracks,currentTrackIndex,setCurrentTrackIndex}) => {
   
    
    
let currentTrack = tracks[currentTrackIndex];
    
  // const playTrack = (index) => {
  //   setCurrentTrackIndex(index);
  //   };

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