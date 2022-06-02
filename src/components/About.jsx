import "./About.css";
export default function About(props) {
  return (
    <>
      <div className="aboutCard">
        <h2 className="tituloAbout"> Práctica de Front-end </h2>
        <h4 className="textoAbout">
          {" "}
         Demo de React, parte del M2 del BootCamp de
          SoyHenry.
        </h4>
        <span className="spanAbout">
          Soy Francisco Molina, estudiante del cohorte FT21b.
        </span>
      </div>
    </>
  );
}