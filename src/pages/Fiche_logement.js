import React, { useParams } from "react";
import Accordion from "../components/Accordion";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { data } from "../data";

const Fiche_logement = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <div className="accordions">
        <Accordion name="Descritpion">{location.description}</Accordion>
        <Accordion name="Équipements"></Accordion>
      </div>

      <Footer />
    </div>
  );
};

export default Fiche_logement;
