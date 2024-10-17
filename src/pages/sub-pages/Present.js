import React from "react";
import "./Present.css";

const Present = () => {
  return (
    <div className="container-fluid  present">
      <div className="container slide-in-blurred-right">
        <ul className="fontsize1">
          <li>
            <p>Ipanema, único avião em série movido a etanol</p>
          </li>
          <li>
            <p>
              E-Jets, maior eficiência, maior conforto, menor impacto ambiental
            </p>
          </li>
          <li>
            <p>
              Super Tucano, referência global em operações de ataque leve e
              treinamento
            </p>
          </li>
          <li>
            <p>
              Cargueiro KC-390, capacidade de carga, versatilidade, velocidade e
              eficiência entre outros
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Present;
