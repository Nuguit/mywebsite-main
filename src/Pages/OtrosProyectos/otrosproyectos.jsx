import cinema from "./cinema.png"

const OtrosProyectos = () => {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <p>
        Aquí encontrarás una selección de proyectos en los que he trabajado o
        que he creado como parte de mi proceso de aprendizaje y práctica continua
        en desarrollo web.
      </p>
      <br />
      <p>
        Here you will find a selection of projects I have worked on or created as
        part of my ongoing learning process and continuous practice in web
        development.
      </p>
    <br />
     
      <div className="circle-container">
        <a href="https://nuguit.github.io/cinema/" target="_blank" rel="noopener noreferrer" className="circle">
          <img src={cinema} alt="Proyecto cine" />
          <div className="overlay">Cinema project</div>
        </a>

        {/* <a href="https://ejemplo2.com" target="_blank" rel="noopener noreferrer" className="circle">
          <img src="https://via.placeholder.com/200" alt="Proyecto 2" />
          <div className="overlay">Proyecto 2: Web App</div>
        </a>

        <a href="https://ejemplo3.com" target="_blank" rel="noopener noreferrer" className="circle">
          <img src="https://via.placeholder.com/200" alt="Proyecto 3" />
          <div className="overlay">Proyecto 3: Portfolio</div>
        </a> */ }
      </div>
    </div>
  );
};

export default OtrosProyectos;

