import React from 'react';
import './Card.css';

import { Link } from 'react-router-dom';

export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className="card">
         <div id="closeIcon">
        <button type="button" class="btn" onClick={onClose}>x</button>
        </div>
        <Link to={`/ciudad/${id}`} style={ {'textDecoration':'none', 'color':'black'  } } > 
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <div className="row">
              <div className="col-sm-4 col-md-4 col-lg-4">
                <p>Min</p>
                <p>{min}°</p>
              </div>
              <div className="col-sm-4 col-md-4 col-lg-4">
                <p>Max</p>
                <p>{max}°</p>
              </div>
              <div className="col-sm-4 col-md-4 col-lg-4">
                <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="65" height="65" alt="Icono-clima" />
              </div>
            </div>
          </div>
        </Link>

      </div>
    );
};