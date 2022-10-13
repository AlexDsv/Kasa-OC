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
      <Accordion name="Descritpion" />
      <Accordion name="Équipements" />
      <Footer />
    </div>
  );
};

export default Fiche_logement;
