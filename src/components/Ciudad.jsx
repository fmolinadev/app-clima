import { useParams } from "react-router-dom";
import "./Ciudad.css";

export default function Ciudad({ onFilter }) {
  const { ciudadId } = useParams();

  const city = onFilter(ciudadId);

  if (city) {
    return (
      <div className="ciudad">
        <div className="containerDetail">
          <h2 className="nameCity">{city.name}</h2>
          <div className="info">
            <div>Temperatura: {city.temp} ºC</div>
            <div>Clima: {city.weather}</div>
            <div>Viento: {city.wind} km/h</div>
            <div>Cantidad de nubes: {city.clouds}</div>
            <div>Latitud: {city.latitud}º</div>
            <div>Longitud: {city.longitud}º</div>
          </div>
        </div>
      </div>
    );
  } else return <h1 className="sinData"> No hay ciudad para mostrar </h1>;
}
