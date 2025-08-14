import React from 'react';
import html from "../SobreMi/html.svg";
import css from "../SobreMi/css.svg";
import javascript from "../SobreMi/javascript.svg";
import mongodb from "../SobreMi/mongodb.svg";
import react from "../SobreMi/react.svg";
import mysql from "../SobreMi/mysql.svg";
import nodejs from "../SobreMi/nodejs.svg";
import bootstrap from "../SobreMi/bootstrap.svg";
import framermotion from "../SobreMi/framermotion.svg";
import python from "../SobreMi/python.svg";
import postman from "../SobreMi/postman.svg";
import github from "../SobreMi/github.svg";
import mailchimp from "../SobreMi/mailchimp.png";
import photoshop from "../SobreMi/photoshop.png";
import picmonkey from "../SobreMi/picmonkey.png";
import office from "../SobreMi/office.png";
import adobe from "../SobreMi/adobe.png";
import canva from "../SobreMi/canva.png";
import semrush from "../SobreMi/semrush.png";
import metricool from "../SobreMi/metricool.png";
import analytics from "../SobreMi/analytics.png";
import adwords from "../SobreMi/adwords.png";
import hubspot from "../SobreMi/hubspot.svg";
import filmora from "../SobreMi/filmora.png";
import imovie from "../SobreMi/imovie.png";
import premiere from "../SobreMi/premiere.png";
import quark from "../SobreMi/quark.png";
import java from "../SobreMi/java.png"


const Curriculum = () => {
  return (
    <div style={{ justifyContent: "center", alignItems: "center", padding: "20px", boxSizing: "border-box" }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: "30px", flexDirection: "column", alignItems: "center" }}>
        <h2 style={{ fontSize: "1.6rem"}}>Mi experiencia profesional / My Professional Experience</h2>
        <br></br>
        <h3>Unicasa Factory – Community Manager (2012)</h3>
        <p>A los pocos meses de finalizar la carrera de Periodismo en la Universidad de Málaga, comencé mi trayectoria profesional como Community Manager para Unicasa Factory. Esta primera experiencia me permitió introducirme en el ámbito laboral y descubrir mi vocación por la comunicación empresarial.</p>
        <p style={{color: "#78BCF0", }}>Just a few months after finishing my Journalism degree at the University of Málaga, I began my professional career as a Community Manager at Unicasa Factory. This first experience gave me valuable insight into the working world and led me to discover my passion for corporate communication.</p>

        <h3>Medios provinciales – Responsable de relaciones comerciales (2013–2015)</h3>
        <p>Posteriormente, compaginé varios trabajos relacionados con la comunicación y la publicidad, entre ellos, la gestión de relaciones comerciales para dos publicaciones provinciales. Fue una etapa intensa y desafiante, pero gratificante, donde consolidé mis habilidades para comunicar y conectar con distintos públicos.</p>
        <p style={{color: "#78BCF0", }}>Later, I combined several jobs related to communication and advertising, including overseeing commercial relations for two provincial publications. It was a demanding but fulfilling stage that allowed me to strengthen my ability to communicate and connect with diverse audiences.</p>

        <h3>Reportera en televisión local / Local TV Reporter (2015)</h3>
        <p>Tras mis primeras experiencias en el sector privado, trabajé durante un tiempo como reportera en un canal local de un municipio de Málaga. Fue una etapa muy enriquecedora a nivel personal y profesional.</p>
        <p style={{color: "#78BCF0", }}>After my initial experiences in the private sector, I worked for a while as a reporter for a local TV channel in a town near Málaga. It was a fun and enriching stage, both personally and professionally.</p>

        <h3>Responsable de comunicación política / Political Communication Manager (2016–2023)</h3>
        <p>Poco después, se me ofreció asumir la responsabilidad de la comunicación de un partido político a nivel municipal. Acepté el reto y durante ocho años lideré campañas de comunicación en el ámbito local, regional y nacional, desarrollando una visión estratégica y transversal de la comunicación institucional.</p>
        <p style={{color: "#78BCF0", }}>Soon after, I was offered the opportunity to take charge of the communication strategy for a political party in my municipality. I embraced the challenge and spent eight years leading communication campaigns at the local, regional, and national levels, developing a strategic and comprehensive approach to institutional messaging.</p>

        <h3>Transición al desarrollo web / Transition to Web Development (since 2023)</h3>
        <p>Tras una etapa de intenso aprendizaje y evolución profesional, decidí reinventarme y ampliar mis horizontes. Comencé a estudiar desarrollo web, un campo que me apasiona por su dinamismo y creatividad, y donde ahora estoy construyendo mi nueva trayectoria.</p>
        <p style={{color: "#78BCF0", }}>After years of professional growth and learning, I decided to reinvent myself and expand my career path. I began studying web development, a field I’m passionate about for its dynamism and creativity, and where I’m currently building the next stage of my professional journey.</p>

        <p>Actualmente me encuentro compaginando mis estudios de Grado Superior en Desarrollo de Aplicaciones Web (tras el bootcamp que realicé en 2023/24) con trabajos esporádicos desarrollando páginas web.</p>
        <p style={{color: "#78BCF0", }}>I’m currently combining my Associate’s Degree studies in Web Development (following the bootcamp I completed in 2023/24) with occasional freelance work building websites.</p>
      </div>
    <br></br>
      <div style={{ textAlign: 'center', margin: "10px auto", maxWidth: "1200px", width: "100%" }}>
        <h3 className='name' style={{color: "#78BCF0", fontSize: "2rem", marginBottom: "20px" }}>🛠 Lenguajes y herramientas / Languages and tools:</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[html, css, javascript, java, mongodb, react, mysql, nodejs, bootstrap, framermotion, python, postman, github].map((img, index) => (
            <img key={index} src={img} alt={img} style={{ margin: "10px", width: "80px", height: "80px" }} />
          ))}
          <img src="https://goncy.netlify.app/static/d52f717f79aca102bdd13af15e455879/69755/banner.jpg" title="Chakra" alt="Chakra" style={{ margin: "10px", width: "80px", height: "80px" }} />
        </div>

        <h3 className='name' style={{ color: "#78BCF0", fontSize: "2rem", marginTop: "50px", marginBottom: "20px" }}>💻 Programas de edición y medición / Editing and measurement programs:</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[mailchimp, picmonkey, photoshop, office, adobe, canva, semrush, metricool, analytics, adwords, hubspot, filmora, imovie, premiere, quark].map((img, index) => (
            <img key={index} src={img} alt={img} style={{ margin: "10px", height: "80px", objectFit: "contain" }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
