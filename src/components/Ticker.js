import React from 'react';
import useFetch from '../hooks/useFetch';
import Spinner from "react-bootstrap/Spinner"; 

const options = {
  method: 'GET',
};

const Ticker = () => {
  const { data, loading, error } = useFetch(
    `https://api.marketstack.com/v1/eod?access_key=1e63a10f6cc5ab1bff37ab67f49534b5&symbols=EMBR3.BVMF`,
    options
  );

  if (loading)
    return (
      <div className="d-flex justify-content-center m-5 pt-3">
        <Spinner animation="border" variant="primary" />
      </div>
    );


  if (error) {
    return <h2>Erro: {error.message}</h2>;
  }

  // Acessando o primeiro item do array data
  const item = data?.data ? data.data[0] : null;

  return (
    <div >
      {item ? (
        <div className="card bg-transparent border-0 ">
          <div className="card-body">
            <h5 className="card-title text-white fontsize1">Ticker: {item.symbol}</h5>
            <p className="card-text text-white fontsize1">Data: {item.date}</p>
            <p className="card-text text-white fontsize1">Abertura: {item.open}</p>
            <p className="card-text text-white fontsize1">Máxima: {item.high}</p>
            <p className="card-text text-white fontsize1">Mínima: {item.low}</p>
            <p className="card-text text-white fontsize1">Volume: {item.volume}</p>
          </div>
        </div>
      ) : (
        <h2>Nenhum dado encontrado</h2>
      )}
    </div>
  );
};

export default Ticker;
