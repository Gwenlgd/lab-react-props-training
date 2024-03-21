import React from "react";

const Greeting = (props) => {
  const lang = props.lang;
  const greetings = {
    de: "Halo",
    es: "Hola",
    en: "Hello",
    it: "Salve",
    fr: "Salut",
  };

  return (
    <p>
      {greetings[lang] || "Hello"} {props.children}
    </p>
  );
};

export default Greeting;
