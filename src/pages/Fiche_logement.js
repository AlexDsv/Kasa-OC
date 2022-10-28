import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Accordion from "../components/Accordion";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { data } from "../data";
import LocationInfos from "../components/LocationInfos";
import StarsRating from "../components/StarsRating";

const Fiche_logement = () => {
  const idsArray = new Array();

  let locationId = useParams().id;

  for (let i = 0; i < data.length; i++) {
    idsArray.push(data[i].id);
  }
  if (!idsArray.includes(locationId)) {
    return <Navigate to="/404" />;
  } else {
    return (
      <div>
        <Header />
        <Carousel />
        <LocationInfos />
        <StarsRating />
        <div className="accordions">
          <Accordion name="Descritpion">
            {data.map((data, key) => {
              let locationId = useParams().id;
              const locationData = [data.description, data.id];
              if (locationId === locationData[1]) {
                return locationData[0];
              }
            })}
          </Accordion>
          <Accordion name="Équipements">
            <ul>
              {data.map((data, key) => {
                let locationId = useParams().id;
                const locationEquipments = [data.equipments, data.id];
                if (locationId === locationEquipments[1]) {
                  return locationEquipments[0].map((equipment) => (
                    <li key={key++}>{equipment}</li>
                  ));
                }
              })}
            </ul>
          </Accordion>
        </div>

        <Footer />
      </div>
    );
  }
};

export default Fiche_logement;
