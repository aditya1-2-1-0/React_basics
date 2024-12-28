import "./Video.css";

function Video({title,bgColor}) {
    
  let bg = "dark";
  return (
    <>
      <img
        src="https://picsum.photos/200/300?grayscale"
        alt="albert einstien"
      />
      <div className={bg} style={{ color: bgColor }}>
        {title} 
      </div>
    </>
  );
}

export default Video;
