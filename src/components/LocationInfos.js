import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";

const LocationInfos = () => {
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
  return (
    <div className="locationInfos">
      <div className="locationName">
        <h2>{location.title}</h2>
      </div>
      <div className="locationHostName">{location.host.name}</div>
      <div
        className="locationHostPicture"
        style={{ backgroundImage: `url(${location.host.picture})` }}
      ></div>
      <div className="locationLocation">
        <p>{location.location}</p>
      </div>
      <div className="locationTags">
        <ul>
          {data.map((data, key) => {
            let locationId = useParams().id;
            const locationTags = [data.tags, data.id];
            if (locationId === locationTags[1]) {
              return locationTags[0].map((tag) => <li key={key++}>{tag}</li>);
            }
          })}
        </ul>
      </div>
      <div className="locationRating"></div>
    </div>
  );
};

export default LocationInfos;
