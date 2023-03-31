import React from "react";
import "./index.css";

export const Post = ({ data }) => {
  return (
    <div className="Post">
    <div className="image-place">
    <img src={data.image} />
    </div>
    <div>
    <div className="info-user">
      <img src={data.avatar} />
      <a href="">{data.userName}</a>
      </div>
        <h4>{data.title}</h4>
        <p className="description">{data.description}</p>
        <p>{data.direction}</p>
        <button className="btn">Más información</button>
        </div>
    </div>
  );
};
