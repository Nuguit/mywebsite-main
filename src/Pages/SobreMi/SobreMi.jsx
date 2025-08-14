import React from 'react';
import perfil from "../SobreMi/perfil.png";
import SwitchImage from './SwitchImage';

const SobreMi = () => {
  return (
    <div style={{ marginTop: "100px", padding: "0 20px", boxSizing: "border-box", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h3 className='mainbox' style={{ fontSize: "2rem", fontStyle: "italic", color: "#78BCF0", textAlign: "center", marginBottom: "10px" }}>
        El arte de la comunicación es el lenguaje del liderazgo 
      </h3>
      <br></br>
      <h3 className='mainbox' style={{ fontSize: "2rem", fontStyle: "italic", color: "#78BCF0", textAlign: "center", marginBottom: "10px" }}>
         The art of communication is the language of leadership 
      </h3>
      <h4 className='mainbox' style={{ fontSize: "1rem", color: "black", textAlign: "right", marginBottom: "20px" }}>
        James Humes
      </h4>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: "100%" }}>
        <SwitchImage width="100%" height="auto" src={perfil} alt="Perfil" style={{ maxWidth: "450px", width: "100%" }} />
        <div style={{ flex: 1, padding: "20px", width: "100%", maxWidth: "800px" }}>
          <p className='text' style={{ fontSize: "1.2rem", color: "black", textAlign: "justify" }}>
            Humes no se equivocaba al afirmarlo. Sólo a través de una comunicación efectiva y honesta podemos llegar a alcanzar nuestros objetivos, tanto en la vida personal como en la profesional.
          </p>
          
          <p className='text' style={{ fontSize: "1.2rem", color: "black", textAlign: "justify", marginBottom: "20px" }}>
            He desarrollado esta vocación durante más de una década, compaginando experiencias laborales con formación. Disfruto diseñando estrategias de comunicación, sus elementos visuales y todo lo relacionado con transmitir la identidad de una marca. El valor de una empresa no está en los números, sino en las emociones que generamos.
          </p>
          
          <p className='text' style={{ fontSize: "1.2rem", color: "black", textAlign: "justify" }}>
            Tras llevar más de diez años dedicados en exclusiva a la comunicación empresarial, decidí ampliar mis horizontes profesionales y sumar otra rama a mis conocimientos: el desarrollo web. Trabajando con lenguajes de front y back end, la experiencia comunicacional que puedo ofrecer ahora es completa: partiendo de cero, podemos crear toda la imagen corporativa, diseñar la estrategia y llevarla a cabo.
          </p>
          <br></br>
          <p className='text' style={{ fontSize: "1.2rem", color: "#1F81F0", textAlign: "justify" }}>
            Humes was not mistaken in affirming it. Only through effective and honest communication can we achieve our goals, both in our personal and professional lives.
          </p>
          
          <p className='text' style={{ fontSize: "1.2rem", color: "#1F81F0", textAlign: "justify" }}>
           I have nurtured this vocation for over a decade, combining work experience with ongoing training. I enjoy designing communication strategies, their visual elements, and everything related to conveying a brands identity. The true value of a company lies not in numbers, but in the emotions we generate.
          </p>
          <p className='text' style={{ fontSize: "1.2rem", color: "#1F81F0", textAlign: "justify" }}>
           After spending more than ten years dedicated exclusively to corporate communications, I decided to broaden my professional horizons and add another branch to my skill set: web development. By working with both front-end and back-end languages, the communication expertise I can now offer is complete: starting from scratch, we can create the entire corporate image, design the strategy, and bring it to life.
          </p>
        </div>
        </div>
    </div>
  );
};

export default SobreMi;



