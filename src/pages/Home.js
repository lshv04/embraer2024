import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="container-fluid home-container ">
      <div className="container  slide-in-blurred-right">
        <h1>Bem vindo a minha apresentação!</h1>
        <p className="fontsize1">Técnicas e tecnologias utilizadas:</p>
        <ul>
          <li className="fontsize1  ">React</li>
          <li className="fontsize1  ">React Router</li>
          <li className="fontsize1  ">React Hooks</li>
          <li className="fontsize1  ">Fetch Api</li>
          <li className="fontsize1 ">Bootstrap</li>
          <li className="fontsize1 ">Javascript/HTML/CSS</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
