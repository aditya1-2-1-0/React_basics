import { useState } from "react";
import "./PlayButton.css";

function PlayButton({ children, onPlay, onPause }) {
  console.log('render Playbutton');
  
  const [playing,setPlaying] = useState(false);

  function handleClick(e) {
    console.log(e);
    e.stopPropagation()
    
    if (playing) onPause();
    else onPlay();
    setPlaying(!playing);
  }
  return (
    <button onClick={handleClick}>
      {children} : {playing ? "▶️" : "⏸️"}
    </button>
  );
}

export default PlayButton;
