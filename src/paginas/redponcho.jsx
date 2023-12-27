import Navbar from "../componentes/navbar"
import Card1 from "../componentes/card1"
import redponcho2 from "../imagenes/redponcho2.png"
import Footer from "../componentes/footer"


const Redponcho = () => {
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
  imagen={redponcho2}
  titulo={"Red Poncho"}
  texto1={"Actualización de página web de redponcho sello discográfico, trabajada con WordPress"}
  pageLink={ "https://www.redponchoproducciones.com/"}
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

export default Redponcho