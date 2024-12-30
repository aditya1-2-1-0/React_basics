import Video from "./components/Video";
import "./App.css";
import videos from "./data/data";
import PlayButton from "./components/PlayButton";
import "./components/PlayButton.css";

function App() {
  return (
    <div className="App" onClick={() => console.log("App")}>
      <h1>Videos</h1>
      <div className="video-list">
        {videos.map((video) => (
          <Video
            key={video.id}
            title={video.title}
            views={video.views}
            time={video.time}
            channel={video.channel}
            verified={video.verified}
            id={video.id}
          >
            <PlayButton
              onPlay={() => console.log("playing..", video.title)}
              onPause={() => console.log("paused..", video.title)}
            />
            <span>{video.title}</span>
          </Video>
        ))}
      </div>
      <div>
        {/* <PlayButton message="play-message" onPlay={() => console.log('playy')} onPause={() =>console.log('pause')} />Play */}
        {/* <PlayButton message="pause-message" onClick={() => alert('pause')} /> */}
        {/* <span>Pause</span> */}
      </div>
    </div>
  );
}

export default App;
