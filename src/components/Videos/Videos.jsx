import React from "react";
import "./Videos.scss";
const Videos = ({ link }) => {
  return (
    <>
      <div className="video">
        {/* <iframe
          className="iframe-video"
          src={link}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> */}
        <iframe className="iframe-video" src={link} title="YouTube video" allowFullScreen></iframe>
      </div>
    </>
  );
};

export default Videos;
