import "./App.css";
import videoDB from "./data/data";
import "./components/PlayButton.css";
import Counter from "./components/Counter";
import { useState } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
  console.log("render App");

  const [videos, setVideos] = useState(videoDB);

  function addVideos(video){
      setVideos([
        ...videos,
        {...video,id: videos.length+1}
      ]);
  }

  return (
    <div className="App" onClick={() => console.log("App")}>
      <h1>Videos</h1>
      <div className="video-list">
        <AddVideo addVideos={addVideos}/>
        <VideoList videos={videos}/>
      </div>
      <div>
        {/* <PlayButton message="play-message" onPlay={() => console.log('playy')} onPause={() =>console.log('pause')} />Play */}
        {/* <PlayButton message="pause-message" onClick={() => alert('pause')} /> */}
        {/* <span>Pause</span> */}
      </div>
      <Counter></Counter>
    </div>
  );
}

export default App;
