import { useEffect, useState } from 'react';
import './AddVideo.css';

const initialState = {
    title: " ",
    views: " ",
    time: "1 month ago",
    channel: "Michael",
    verified: true,
}

function AddVideo({addVideos,editableVideo,updateVideo}) {
    const [video,setVideo] = useState(initialState);

    function handleSubmit(e){
        e.preventDefault();
        if(editableVideo){
            updateVideo(video)
        } else{
        addVideos(video)
        }
        setVideo(initialState)
        
    }

    function handleChange(e){
        console.log(e.target.name,e.target.value);
        setVideo({...video,
            [e.target.name] : e.target.value,
        })
        
    }

    useEffect(() => {
        if(editableVideo){
            setVideo(editableVideo)
        }
        
        
    },[editableVideo])

  return (
    <form>
      <input type="text" name='title' onChange={handleChange} placeholder='title' value={video.title}/>
      <input type="text" name='views' onChange={handleChange} placeholder='views' value={video.views}/>
      <button
       onClick={handleSubmit}>
        {editableVideo ? 'Edit ' : 'Add '}
         Video
      </button>
    </form>
  );
}

export default AddVideo;
