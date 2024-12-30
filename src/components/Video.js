import "./Video.css";

function Video({ title, channel, views, time, verified, id, children,deleteVideo,editVideo }) {
  console.log('render video');
  
  return (
    <>
      <div className="container">
        <button className="close" onClick={()=>deleteVideo(id)}>X</button>
        <button className="edit" onClick={()=>editVideo(id)}>Edit</button>
        <div className="pic">
          <img
            src={`https://picsum.photos/id/${id}/300/190`}
            alt="albert einstien"
          />
        </div>
        <div className="title">{title}</div>
        <div className="channel">
          {channel} {verified && "✅"}
        </div>
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}

export default Video;
