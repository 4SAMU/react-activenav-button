import { useState } from "react";

export default function ActiveNavButton(initialString) {
  const [activeLink, setActiveLink] = useState(initialString);

  function handleButtonClick(link) {
    return function (event) {
      console.log(event);
      event.preventDefault();
      setActiveLink(link);
    };
  }

  return { activeLink, handleButtonClick };
}
