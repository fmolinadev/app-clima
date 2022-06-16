import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
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
    return swal({
      title: "¿Estás seguro?",
      text: "Si aceptas, dejaras de ver la informacion de esta ciudad.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        setCities((oldCities) => oldCities.filter((c) => c.id !== id));
        swal("Ciudad eliminada de la lista.", {
          icon: "success",
        });
      } else {
        swal("No se producieron cambios.");
      }
    });
  }
  async function onSearch(ciudad) {
    //Llamado a la API del clima
    await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&lang=es&appid=${apiKey}`
    )
      .then((r) => r.json())
      .then((resultado) => {
        if (resultado.main !== undefined) {
          const ciudad = {
            min: resultado.main.temp_min,
            max: resultado.main.temp_max,
            img: resultado.weather[0].icon,
            id: resultado.id,
            wind: resultado.wind.speed,
            temp: resultado.main.temp,
            name: resultado.name,
            weather: resultado.weather[0].main,
            clouds: resultado.clouds.all,
            latitud: resultado.coord.lat,
            longitud: resultado.coord.lon,
          };

          let ciudadEncontrada = cities.find((city) => city.id === ciudad.id);

          if (ciudadEncontrada)
            return swal("La ciudad ya se encuentra en la lista.");
          else return setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          swal("Ciudad no encontrada.");
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
      <Footer />
    </div>
  );
}

export default App;
