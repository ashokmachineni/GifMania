import React from "react";
import GifGridItem from "./GifGridItem";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";

function GifGrid({ category }) {
  const { data, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Loading...</p>}
      <div className="card-grid">
        <ol>
          {data.map(imag => (
            <GifGridItem key={imag.id} {...imag} />
          ))}
        </ol>
      </div>
    </>
  );
}

export default GifGrid;
