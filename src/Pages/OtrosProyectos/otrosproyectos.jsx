import cinema from "./cinema.png"
import eagles from "./eagles.png"
import advokat from "./advokat.png"
import offline from "./offline.jpg"

const OtrosProyectos = () => {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <p>
        Aquí encontrarás una selección de proyectos en los que he trabajado o
        que he creado como parte de mi proceso de aprendizaje y práctica continua
        en desarrollo web.
      </p>
      <br />
      <p style={{color: "#78BCF0", }}>
        Here you will find a selection of projects I have worked on or created as
        part of my ongoing learning process and continuous practice in web
        development.
      </p>
    <br />
     <h2>Proyectos desde cero / Projects from scratch</h2>
     <br />
      <div className="circle-container">
  <a href="https://nuguit.github.io/cinema/" target="_blank" rel="noopener noreferrer" className="circle">
    <img src={cinema} alt="Proyecto cine" />
    <div className="overlay">Cinema project</div>
  </a>

  <a href="https://eaglesinspain.free.nf/" target="_blank" rel="noopener noreferrer" className="circle">
    <img src={eagles} alt="Proyecto Eagles" />
    <div className="overlay">Eagles Project</div>
  </a>
</div>
<br />
<h2>Trabajos de modificación de código, creación de contenido / Code modification tasks, content creation</h2>
     <br />
      <div className="circle-container">
  <a href="https://advokatkontoret.es/" target="_blank" rel="noopener noreferrer" className="circle">
    <img src={advokat} alt="Advokatkontoret" />
    <div className="overlay">Advokatkontoret lawyers</div>
  </a>
</div>

<br />
<h2>Trabajos de comunicación empresarial/offline / Corporate/offline communication work</h2>
     <br />
      <div className="circle-container">
  <a href="https://pdfhost.io/v/H4CPg3updc_presentacion_trabajos_anteriores" target="_blank" rel="noopener noreferrer" className="circle">
    <img src={offline} alt="Offline work" />
    <div className="overlay">Some of my offline work</div>
  </a>
</div>

        
      </div>
    
  );
};

export default OtrosProyectos;

