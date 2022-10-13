import axios from "axios";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { data } from "../data";

const Gallery = () => {
  return (
    <div className="gallery">
      {data.map((data, key) => {
        return (
          <div className="card" key={data.id}>
            <NavLink to={`/logement/${data.id}`}>
              <img src={data.cover} />
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
