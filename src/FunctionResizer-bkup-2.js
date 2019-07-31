import React, { useState, useEffect } from "react";

function useWindowResize() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  function onResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  });

  return [width, height];
}

const WidthResizerFunction = () => {
  const [width, height] = useWindowResize();

  return (
    <div>
      <p> Largura da tela: {width} </p>
      <p> Altura da tela: {height} </p>
    </div>
  );
};

export default WidthResizerFunction;
