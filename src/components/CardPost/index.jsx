import React, { useEffect } from "react";
import { Link  } from "react-router-dom";
import "./index.css";


export const CardPost = ({ data }) => {
  return (
    <div className="Card">
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
        <Link to={`/posts/${data.id}`} className="btn">Más información</Link>
        </div>
    </div>
  );
};
