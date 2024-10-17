import React from "react";
import "./Aboutme.css";

const AboutMe = () => {
  return (
    <div className="container-fluid aboutme ">
      <div className="container slide-in-blurred-right">
        <h1>Sobre mim</h1>
        <ul className="fontsize1">
          <li>Nome: Leandro Hosken </li>
          <li>Idade: 34</li>
          <li>Cidade: Belo Horizonte</li>
          <li>Curso: Sistema de informação - UNA</li>
        </ul>
        <p className="fontsize1">
          Tenho dezenas de projetos publicados no{" "}
          <a
            href="https://github.com/lshv04"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <span>
              Github <i className="bi bi-github "></i>{" "}
            </span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
