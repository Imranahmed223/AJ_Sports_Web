import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
const Play = ({ src }) => {
  return (
    <div>
      <Video autoPlay loop>
        <source src={src} type="video/webm" height={"100vh"} />
      </Video>
    </div>
  );
};

export default Play;
