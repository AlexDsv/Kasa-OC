import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { data } from "../data";

const StarsRating = () => {
  const [location, setLocation] = useState({
    id: "",
    title: "",
    cover: "",
    pictures: [],
    description: "",
    host: { name: "", picture: "" },
    rating: "",
    location: "",
    equipments: [],
    tags: [],
  });

  let locationId = useParams().id;

  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === locationId) {
        setLocation(data[i], []);
      }
    }
  });
  var i = 0;
  var x = 0;
  var fullStars = new Array(location.rating);
  while (i < location.rating) {
    fullStars[i] = i;
    i++;
  }
  var emptyStars = new Array(5 - location.rating);
  while (x < 5 - location.rating) {
    emptyStars[x] = x;
    x++;
  }
  console.log(emptyStars);
  return (
    <div className="locationRating">
      <ul>
        {fullStars.map((key) => {
          return (
            <li key={key}>
              <img src="../FullStar.png" />
            </li>
          );
        })}
        {emptyStars.map((key) => {
          return (
            <li key={key}>
              <img src="../EmptyStar.png" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default StarsRating;
