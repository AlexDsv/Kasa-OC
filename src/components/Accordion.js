import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { data } from "../data";

function Accordion(props) {
  // Récuperation des données correspondant au logement cliqué par le client
  // Création d'un etat avec un objet reprenanat le même modèle que les données stockées dans notre json
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

  // Boucle pour récupérer les données correspondant au logement voulu et setLocation pour attribuer à Location les données/modfiier l'état
  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === locationId) {
        setLocation(data[i], []);
      }
    }
  });

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion_toggle" onClick={() => setIsOpen(!isOpen)}>
        {props.name}
        <span>
          {isOpen === false ? (
            <i className="fa-solid fa-chevron-down"></i>
          ) : (
            <i className="fa-solid fa-chevron-up"></i>
          )}
        </span>
      </div>
      {isOpen === true ? (
        <div className="accordion_content_show">{props.children}</div>
      ) : (
        <div className="accordion_content"></div>
      )}
    </div>
  );
}

export default Accordion;
