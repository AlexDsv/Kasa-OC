import axios from "axios";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { data } from "../data";

const Gallery = () => {
  return (
    <div className="gallery">
      {data.map((data, key) => {
        return (
          <div
            className="card"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%),url(${data.cover}) `,
            }}
            key={data.id}
          >
            <NavLink to={`/logement/${data.id}`}>
              <div className="card_description">
                <h3>{data.title}</h3>
              </div>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
