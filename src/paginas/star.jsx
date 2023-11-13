
import Navbar from "../componentes/navbar"
import Card1 from "../componentes/card1"
import starpc from "../imagenes/nuevo5.png"
import Footer from "../componentes/footer"
const Star = () => {
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
  imagen={starpc}
  titulo={"Star Wars"}
  texto1={"Aplicación interactiva que utiliza la API de Star Wars para explorar personajes, vehículos y planetas del universo. ¡Sumérgete en el mundo de Star Wars de manera divertida y educativa!"}
  githubLink={ "https://github.com/titoshiro/Blog_de_Starwars" }
  pageLink={ ""}
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

export default Star