import Navbar from "../componentes/navbar"
import Card1 from "../componentes/card1"
import ricardo from "../imagenes/ricardo.png"
import Footer from "../componentes/footer"


const Sicologo = () => {
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
  <Card1
  imagen={ricardo}
  titulo={"Ricardo Brussolo"}
  texto1={"Creación de página web para el prestigioso sicólogo Ricardo Brussolo, trabajada con WordPress, para ser autogestionada."}
  pageLink={ "http://ricardobrussolo.com/"}
  mostrarIconoGithub={false}  // Mostrará el icono de GitHub
  mostrarIconoPagina={true} // No mostrará el icono de Página
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

export default Sicologo