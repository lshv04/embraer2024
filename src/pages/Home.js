import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="container-fluid home-container ">
      <div className="container  ">
        <h1>Bem vindo a minha apresentação!</h1>
        <p className="fontsize1">Tecnologias utilizadas:</p>
        <ul>
          <li className="fontsize1">React</li>
          <li className="fontsize1">React-Router</li>
          <li className="fontsize1">Bootstrap</li>
          <li className="fontsize1">HTML/CSS</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
