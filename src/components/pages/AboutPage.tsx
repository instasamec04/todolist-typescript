import React from "react";
import { useNavigate } from "react-router-dom";

const AboutPage: React.FunctionComponent = () => {
    const navigate = useNavigate()
  return (
    <>
      <h2>Страница информации</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo velit
        totam laborum? Non quis nemo veniam dolores, necessitatibus porro
        tempora, maiores soluta quas omnis sequi illum, at libero facilis totam.
      </p>
      <button className="btn" onClick={()=> navigate("/")}>Обратно к списку дел</button>
    </>
  );
};

export default AboutPage;
