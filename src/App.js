import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import swal from "sweetalert";

import Nav from "./components/Nav.jsx";
import Cards from "./components/Cards.jsx";
import About from "./components/About.jsx";
import Ciudad from "./components/Ciudad.jsx";

const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
    return swal("Ciudad eliminada");
  }
  async function onSearch(ciudad) {
    //Llamado a la API del clima
    await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&lang=es&appid=${apiKey}`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: recurso.main.temp_min,
            max: recurso.main.temp_max,
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };

          let ciudadEncontrada = cities.find((city) => city.id === ciudad.id);
          if (ciudadEncontrada)
            return swal("La ciudad ya se encuentra en la lista.");
          else return setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          swal("Ciudad no encontrada");
        }
      });
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />

      <Routes>
        <Route path="/" element={<Cards cities={cities} onClose={onClose} />} />

        <Route path="/about" element={<About numero={4567987} />} />
        <Route
          path="/ciudad/:ciudadId"
          element={<Ciudad onFilter={onFilter} />}
        />
      </Routes>
    </div>
  );
}

export default App;
