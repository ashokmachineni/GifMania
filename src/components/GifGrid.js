import React, { useState, useEffect } from "react";
import GifGridItem from "./GifGridItem";
import { getGifs } from "../helpers/getGifs";

function GifGrid({ category }) {
  const [images, setImages] = useState([]);
  console.log(images);
  useEffect(() => {
    getGifs(category).then(setImages);
  }, [category]);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        <ol>
          {images.map(imag => (
            <GifGridItem key={imag.id} {...imag} />
          ))}
        </ol>
      </div>
    </>
  );
}

export default GifGrid;
