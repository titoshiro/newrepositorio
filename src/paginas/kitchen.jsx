import Navbar from "../componentes/navbar"
import Card1 from "../componentes/card1"
import kitchenpc from "../imagenes/nuevo3.png"
import Footer from "../componentes/footer"

const Kitchen = () => {
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
  imagen={kitchenpc}
  titulo={"Kitchen Companion"}
  texto1={"Proyecto colaborativo centrado en la creación de recetas personalizadas a partir de los ingredientes disponibles en el refrigerador del usuario."}
  githubLink={ "https://github.com/titoshiro/KitchenCompanion" }
  mostrarIconoGithub={true}  // Mostrará el icono de GitHub
  mostrarIconoPagina={false} // No mostrará el icono de Página
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

export default Kitchen