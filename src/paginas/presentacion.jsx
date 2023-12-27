import Navbar from "../componentes/navbar"
import Card1 from "../componentes/card1"
import fastcopresentacion from "../imagenes/fastcopresentacion.png"
import Footer from "../componentes/footer"


const Presentacion = () => {
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
  imagen={fastcopresentacion}
  titulo={"Presentación Fastco"}
  texto1={"Presentación comercial para la empresa Fastco, realizado con WordPress"}
  pageLink={ "https://fastcopresentacion.somostalentohub.com"}
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

export default Presentacion