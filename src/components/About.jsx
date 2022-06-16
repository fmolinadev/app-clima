import "./About.css";
export default function About(props) {
  return (
    <>
      <div className="aboutCard">
        <h2 className="tituloAbout">SPA Meteorológica:</h2>
        <h4 className="textoAbout">Práctica del módulo Frontend</h4>
        <p className="textDescription">
          Como parte del bootcamp de #SoyHenry desarrolle una simple app del
          clima que obtiene la información de una API
          https://openweathermap.org/ y te permite buscar ciudades por nombre y
          acceder al estado del tiempo de la misma.
        </p>
        <div className="about-links">
          <a
            href="https://bit.ly/franciscomolina-dev"
            target="_blank"
            rel="noreferrer"
            aria-label="linkedin"
            className="link"
          >
            <div className="link-button">Ir a Linkedin</div>
          </a>
          <a
            href="https://bit.ly/thefranciscomolina_github"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link"
          >
            <div className="link-button">Ir a Github</div>
          </a>
        </div>
      </div>
    </>
  );
}
