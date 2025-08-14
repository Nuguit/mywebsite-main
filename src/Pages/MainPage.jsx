
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Pixelart from "../Pages/pixelart.png";

const MainPage = () => {
  return (
    <div className="main-container">
      <div className="content-container">
        
        
        <motion.h1
          className="main-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Nuria Guevara Fuentes
        </motion.h1>

        <motion.h2
          className="main-subtitle"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Desarrolladora Web FullStack · Periodista · Especialista en comunicación empresarial
          <br></br>
          Full-Stack Web Developer · Journalist · Corporate Communications Specialist
        </motion.h2>

       <br></br>
        <motion.div
          className="description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <p>Creativa y curiosa por naturaleza.</p><p>Apasionada por la tecnología y la comunicación.</p>
          <br></br>
          <p>Creative and curious by nature.</p> <p>Passionate about technology and communication.</p>
        </motion.div>

        
        <motion.p
          className="quote"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        >
          No existe el "no sé", existe el "busquemos cómo".
          <br></br>
          There’s no such thing as “I don’t know,” only “let’s find out how.”
        </motion.p>

        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
        >
          <Link to="/about" className="about-link">
            <img src={Pixelart} alt="Pixelart" className="pixelart-img" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default MainPage;
