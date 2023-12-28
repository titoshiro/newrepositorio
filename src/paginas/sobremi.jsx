import Card3 from "../componentes/card3"
import Navbar from "../componentes/navbar"
import foto from "../imagenes/sobremi.png"
import Footer from "../componentes/footer"

const Sobremi = () => {
  return (
    <>
     <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Navbar />
          </div>
        </div>
      </div>
    <div className="container">
      <div className="row">
        <div className="col-12">
        <Card3
  imagen={foto}
  titulo={"MI HISTORIA"}
  texto1={
    "Mi carrera ha sido una emocionante evolución. Comencé mi travesía en el desarrollo web con una formación integral en 4Geeks Academy, obteniendo la certificación FullStack. Mi especialización se centra en el Frontend, destacando en tecnologías como HTML5, CSS y JavaScript, React.\n\nExtendí mi compromiso con la excelencia al obtener una certificación UX a través de Coursera, respaldada por Google, fortaleciendo mi enfoque en la creación de productos digitales impactantes y centrados en el usuario.\n\nAntes de adentrarme en el mundo digital, cimenté una sólida base como músico y sonidista, colaborando con talentos como Ana Tijoux y Beto Cuevas. Estas experiencias musicales han enriquecido mi perspectiva creativa, complementando mi carrera en desarrollo web y diseño UX.\n"
  }
  
  githubLink={"https://github.com/titoshiro/"}
  linkedinLink={"https://www.linkedin.com/in/héctor-gerardo-silva-villena"}
  spotifyLink={"https://open.spotify.com/artist/2CSuYJKb4Mr9ta1lasaTjb?si=RNiCBVW9RDaQsHWHjkS3WQ"}
  pageLink={"https://drive.google.com/file/d/1URH8UJoFh__nCU4M08iWyz6hsFvwqRZ8/view?usp=drive_link"}
  mostrarIconoGithub={true}
  mostrarIconoLinkedin={true}
  mostrarIconoSpotify={true}
  mostrarIconoPagina = {true}
/>
        </div>
      </div>
    </div>
    <div className="container">
        <div className="row">
          <div className="col">
            <Footer/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sobremi