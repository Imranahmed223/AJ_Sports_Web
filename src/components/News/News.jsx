import React from "react";
import "./News.scss";
const News = ({ image, heading, para }) => {
  return (
    <>
      <div className="new">
        <div className="new-container">
          <div className="new-container-image">
            <img src={image} alt="" />
          </div>
          <div className="new-container-content">
            <h3>{heading}</h3>
            <p>{para}</p>
          </div>
        </div>
        <div className="news-divider"></div>
      </div>
    </>
  );
};

export default News;
