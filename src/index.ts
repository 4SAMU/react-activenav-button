import React, { useState } from "react";

export default function ActiveNavButton(initialString: any) {
  const [activeLink, setActiveLink] = useState(initialString);

  function handleButtonClick(link: any) {
    return function (event: any) {
      event.preventDefault();
      setActiveLink(link);
    };
  }

  return { activeLink, handleButtonClick };
}
