import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

function GitExpert(props) {
  const [categories, setCategories] = useState(["One Punch"]);
  //const handleAdd = () => {}
  return (
    <>
      <h1 className="animate__animated animate__bounceInUp animate__delay-1s">
        GIF Mania
      </h1>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map(category => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
}

export default GitExpert;
