import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const SocialButton = ({ icon, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary m-2">
      <FontAwesomeIcon icon={icon} /> {/* Icono de red social */}
    </a>
  );
};

export default SocialButton;
