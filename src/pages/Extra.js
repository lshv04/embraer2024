
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Extra.css";

const Extra = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Impede o comportamento padrão de recarregar a página
    if (inputValue.trim()) {
      // Redireciona para a página Detail com o valor do input como search param
      navigate(`/extra/detail?query=${encodeURIComponent(inputValue)}`);
    }
    setInputValue("");
  };

  return (
    <div className="container-fluid  extra g-0">
      <div className="container g-0 my-5 slide-in-blurred-right">
        <div className="row g-0">
          <div className="col-12 col-md-6 col-lg-3 p-2">
            <form onSubmit={handleSubmit} className="d-flex ">
              <div>
                <div className="d-flex flex-row gap-2  my-5">
                  <input
                    type="text"
                    className="form-control"
                    id="input"
                    name="input"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="EX:AA100..."
                    style={{ border: "none", boxShadow: "none" }}
                  />
                  <button type="submit" className="btn btn-primary ">
                    <span>
                      <i className="bi bi-search"></i>
                    </span>
                  </button>
                </div>
              </div>
            </form>
            <div>
              <p className="fontsize1">
                Este projeto foi desenvolvido por Leandro Hosken, utilizando as
                melhores práticas de componentização e design responsivo,
                garantindo performance e escalabilidade
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extra;
