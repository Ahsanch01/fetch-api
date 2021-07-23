import React from "react";
import "./imagesList.css";
import ImageCard from "./imageCard";
const images = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default images;
