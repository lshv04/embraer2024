import React from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import "./Detail.css";

const options = {
  method: "GET",
};

const Detail = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query"); // Captura o parâmetro 'query' da URL
  console.log(query);

  const { data, loading, error } = useFetch(
    `https://api.aviationstack.com/v1/flights?access_key=b4c4f471c4c36a12f4fc470252d2f567&flight_iata=${query}`,
    options
  );

  if (loading)
    return (
      <div className="d-flex justify-content-center m-5 pt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );

  if (error) {
    return <h2>Erro: {error.message}</h2>;
  }

  // Verificação adicional para array vazio
  if (!data || !data.data || data.data.length === 0) {
    return (
      <div className="d-flex justify-content-center m-5 pt-5">
        <h2 className="text-dark">Nenhum dado disponível para o voo.</h2>
      </div>
    );
  }
  return (
    <div className="container-fluid detail  ">
      <div className="container ">
        <div className="row g-0 d-flex justify-content-between">
          {data.data.map((item) => (
            <div
              className="col-12 col-md-5 mb-5 mt-5 pt-5 "
              key={`${item.flight?.iata}-${item.departure.estimated}`}
            >
              <Card className="h-100 shadow-sm card-transparent-body">
                <Card.Header className="bg-primary text-white">
                  <h4 className="mb-0">
                    Flight {item.flight?.iata || "n/a"} -{" "}
                    {item.flight_date || "n/a"}
                  </h4>
                  <small>Airline: {item.airline?.name || "n/a"}</small>
                </Card.Header>
                <Card.Body>
                  <h5 className="fontsize1 text-white fw-bold">
                    Departure Information
                  </h5>
                  <p>
                    <strong>Airport:</strong> {item.departure?.airport || "n/a"}
                  </p>
                  <p>
                    <strong>Estimated:</strong>{" "}
                    {item.departure?.estimated || "n/a"}
                  </p>
                  <p>
                    <strong>Scheduled:</strong>{" "}
                    {item.departure?.scheduled || "n/a"}
                  </p>
                  <p>
                    <strong>Terminal:</strong>{" "}
                    {item.departure?.terminal || "n/a"}
                  </p>
                  <p>
                    <strong>Gate:</strong> {item.departure?.gate || "n/a"}
                  </p>
                  <p>
                    <strong>Timezone:</strong>{" "}
                    {item.departure?.timezone || "n/a"}
                  </p>

                  <h5 className="mt-4 fontsize1 text-white fw-bold">
                    Arrival Information
                  </h5>
                  <p>
                    <strong>Airport:</strong> {item.arrival?.airport || "n/a"}
                  </p>
                  <p>
                    <strong>Estimated:</strong>{" "}
                    {item.arrival?.estimated || "n/a"}
                  </p>
                  <p>
                    <strong>Scheduled:</strong>{" "}
                    {item.arrival?.scheduled || "n/a"}
                  </p>
                  <p>
                    <strong>Terminal:</strong> {item.arrival?.terminal || "n/a"}
                  </p>
                  <p>
                    <strong>Gate:</strong> {item.arrival?.gate || "n/a"}
                  </p>
                  <p>
                    <strong>Timezone:</strong> {item.arrival?.timezone || "n/a"}
                  </p>

                  <h5 className="text-danger mt-4 fontsize1 fw-bold">Delays</h5>
                  <p className="text-danger fontsize1 fw-bold">
                    Departure Delay: {item.departure?.delay || "n/a"} minutes
                  </p>
                  <p className="text-danger fontsize1 fw-bold">
                    Arrival Delay: {item.arrival?.delay || "n/a"} minutes
                  </p>

                  <h5 className="mt-4 text-white fw-bold">Flight Status</h5>
                  <p>{item.flight_status || "n/a"}</p>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
