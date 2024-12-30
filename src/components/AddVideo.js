import { useState } from 'react';
import './AddVideo.css';

const initialState = {
    title: " ",
    views: " ",
    time: "1 month ago",
    channel: "Michael",
    verified: true,
}

function AddVideo({addVideos}) {
    const [video,setVideo] = useState(initialState);

    function handleSubmit(e){
        e.preventDefault();
        addVideos(video)
        setVideo(initialState)
        
    }

    function handleChange(e){
        console.log(e.target.name,e.target.value);
        setVideo({...video,
            [e.target.name] : e.target.value,
        })
        
    }

  return (
    <form>
      <input type="text" name='title' onChange={handleChange} placeholder='title' value={video.title}/>
      <input type="text" name='views' onChange={handleChange} placeholder='views' value={video.views}/>
      <button
       onClick={handleSubmit}
        // onClick={() => {
        //   setVideos([
        //     ...videos,
        //     {
        //       id: videos.length + 1,
        //       title: "Postgres",
        //       views: "743k",
        //       time: "1 month ago",
        //       channel: "Michael",
        //       verified: true,
        //     },
        //   ]);
        // }}
      >
        Add Video
      </button>
    </form>
  );
}

export default AddVideo;
