import React from "react";

function ProductionCountry({ name, i }) {
  return (
    <div key={i} className="flex flex-row justify-between w-56">
      <p>{name}</p>
    </div>
  );
}

export default ProductionCountry;
