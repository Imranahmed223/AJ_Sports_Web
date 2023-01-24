import React from "react";
import "./MediaPlayer.scss";
import video from "../../assest/video.mp4";
import { BsEmojiLaughing } from "react-icons/bs";
import { FiArrowUp } from "react-icons/fi";
import { ImAttachment } from "react-icons/im";
import { RiCloseCircleFill } from "react-icons/ri";
import Play from "../../components/Play/Play";

const MediaPlayer = () => {
  return (
    <>
      <div className="mediaplayer">
        <div className="mediaplayer-video">
          <Play src={video} />
        </div>
        <div className="mediaplayer-chat">
          <MediaChat />
        </div>
      </div>
      <div className="mediaplayer"></div>
    </>
  );
};

export default MediaPlayer;

const MediaChat = () => {
  return (
    <>
      <div className="chat-media">
        <div className="chat-media-top">
          <div></div>
          <center>Chat</center>
          <div className="chat-media-top-icon">
            <RiCloseCircleFill />
          </div>
        </div>
        <div className="chat-media-chat"></div>
        <div className="chat-media-input">
          <div className="chat-media-input-container">
            <BsEmojiLaughing style={{ fontSize: "1.5rem" }} />
            <ImAttachment style={{ color: "white", fontSize: "1.5rem" }} />
            <input type="text" placeholder="Type message here" />
            <FiArrowUp className="chat-media-input-container-icon" />
          </div>
        </div>
      </div>
    </>
  );
};
