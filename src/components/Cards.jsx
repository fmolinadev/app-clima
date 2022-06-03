import React from "react";
import "./Cards.css";

import Card from "./Card.jsx";

export default function Cards({ cities, onClose }) {
  // console.log("ENTRO EN CARDS =>", cities);
  return (
    <div className="cards">
      {cities.length ? (
        cities.map((c) => (
          <Card
            key={c.id}
            id={c.id}
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
          />
        ))
      ) : (
        <h2>¡Comienza buscando una ciudad!</h2>
      )}
    </div>
  );
}
