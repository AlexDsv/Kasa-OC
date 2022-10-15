import React from "react";
import { useEffect } from "react";
import { data } from "../data";
import { useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

const Carousel = () => {
  // Récuperation des données correspondant au logement cliqué par le client
  // Création d'un etat avec un objet reprenanat le même modèle que les données stockés dans notre json
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

  // Recuperation de l'ID du logement sur lequel le client est grâce à l'id présent dans l'URL
  let locationId = useParams().id;

  // Boucle pour récupérer les données correspondant au logement voulu et setLocation pour attribuer à Location les données
  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === locationId) {
        setLocation(data[i], []);
      }
    }
  });

  const [currImg, setCurrImg] = useState(0);
  return (
    <div className="carousel">
      {/* Insertion de la première image du logement en background dans le carousel */}
      <div
        className="innerCarousel"
        style={{ backgroundImage: `url(${location.pictures[currImg]})` }}
      >
        {/* Fleche Left pour revenir en arrière dans les images du carousel */}
        <div
          className="left"
          // Condition pour aller à la dernière image si on clique sur Left en étant sur la première image
          onClick={() => {
            currImg > 0
              ? setCurrImg(currImg - 1)
              : setCurrImg(location.pictures.length - 1);
          }}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </div>
        <div className="center">
          <p>
            {currImg + 1}/{location.pictures.length}
          </p>
        </div>
        <div
          className="right"
          // Condition pour aller à la première image si on clique sur Right en étant sur la dernière image
          onClick={() => {
            currImg < location.pictures.length - 1
              ? setCurrImg(currImg + 1)
              : setCurrImg(0);
          }}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
