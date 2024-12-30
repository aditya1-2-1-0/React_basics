import "./PlayButton.css";

function PlayButton({ children, onPlay, onPause }) {
  let playing = false;

  function handleClick(e) {
    console.log(e);
    
    if (playing) onPause();
    else onPlay();
    playing = !playing;
  }
  return (
    <button onClick={handleClick}>
      {children} : {playing ? ">" : "||"}
    </button>
  );
}

export default PlayButton;
