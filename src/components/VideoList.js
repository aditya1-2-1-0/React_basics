import Video from "./Video";
import PlayButton from "./PlayButton";

function VideoList({videos,deleteVideo,editVideo}) {
    
    return(
        <>
        {videos.map((video) => (
            <Video
              key={video.id}
              title={video.title}
              views={video.views}
              time={video.time}
              channel={video.channel}
              verified={video.verified}
              id={video.id}
              deleteVideo={deleteVideo}
              editVideo = {editVideo}
            >
              <PlayButton
                onPlay={() => console.log("playing..", video.title)}
                onPause={() => console.log("paused..", video.title)}
              />
              <span>{video.title}</span>
            </Video>
          ))}
          </>
    )
}

export default VideoList;