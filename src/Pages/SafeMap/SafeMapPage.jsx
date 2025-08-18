import safemap from "../SafeMap/safemap.png";

const SafeMapPage = () => {
  return (
    <div style={{ textAlign: "center", margin: "20px", padding: "0 10px", boxSizing: "border-box" }}>
      <p className='text' style={{ fontSize: "2rem", color: "black", textAlign: "center", marginBottom: "20px" }}>
        SafeMap es mi proyecto de fin de Bootcamp / SafeMap is my Bootcamp final project
      </p>
      <br></br>
      <p className='text' style={{ fontSize: "1.2rem", color: "black", textAlign: "center", marginBottom: "20px" }}>
        Hoy en día viajar y conocer mundo es algo habitual. Las distancias se hacen cortas y el mundo interconectado en el que vivimos nos permite conocer lugares con los que, hasta hace no mucho, solo se podía soñar.
      </p>
      <p className='text' style={{ fontSize: "1.2rem", color: "#78BCF0", textAlign: "center", marginBottom: "20px" }}>
        Nowadays, traveling and discovering the world has become commonplace. Distances feel shorter, and the interconnected world we live in allows us to experience places that, not so long ago, we could only dream about.
      </p>
      <p className='text' style={{ fontSize: "1.2rem", color: "black", textAlign: "center", marginBottom: "20px" }}>
        Pero...¿y una vez que estamos allí? Podemos visitar las zonas más turísticas, claro...Pero ¿sabemos cómo llegar allí? ¿Y cómo volver a nuestro alojamiento sin encontrarnos con impedimentos de accesibilidad o zonas peligrosas?
      </p>
      <p className='text' style={{ fontSize: "1.2rem", color: "#78BCF0", textAlign: "center", marginBottom: "20px" }}>
        But… what about once we’re there? Of course, we can visit the most touristy spots… But do we really know how to get there? And how to return to our accommodation without running into accessibility barriers or unsafe areas?
      </p>
      <p className='text' style={{ fontSize: "1.2rem", color: "black", textAlign: "center", marginBottom: "20px" }}>
        De esa idea surge SafeMap: un mapa donde poder colocar "banderas rojas" en espacios o calles públicos y advertir a otros usuarios de la aplicación.
      </p>
      <p className='text' style={{ fontSize: "1.2rem", color: "#78BCF0", textAlign: "center", marginBottom: "20px" }}>
        That’s where the idea for SafeMap came from: a map where users can place “red flags” on public spaces or streets to warn other users of the app.
      </p>
      <p className='text' style={{ fontSize: "1.6rem", color: "black", textAlign: "center", marginBottom: "20px" }}>
        ¿Quieres verlo? Pincha en la siguiente imagen: / Want to see it? Click on the image below:
      </p>
      <div>
        <a href="https://finalproject-front-seven.vercel.app/">
          <img
            style={{
              display: "block",
              margin: "0 auto",
              maxWidth: "600px",
              height: "auto"
            }}
            src={safemap}
            alt="SafeMap"
          />
        </a>
      </div>
    </div>
  );
};

export default SafeMapPage;
