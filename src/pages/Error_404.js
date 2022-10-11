import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Error_404 = () => {
  return (
    <div className="error_page">
      <Header />
      <div className="error_page_content">
        <p className="error_number">404</p>
        <p className="error_msg">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <NavLink to={"/"} className="homepage_redirection">
          <p>Retourner sur la page d'accueil</p>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Error_404;
