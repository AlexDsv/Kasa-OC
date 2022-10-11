import React, { useState } from "react";

function Accordion(props) {
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
