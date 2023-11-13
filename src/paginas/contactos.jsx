import Navbar from "../componentes/navbar"
import Card1 from "../componentes/card1"
import contacto from "../imagenes/nuevo6.png"
import Footer from "../componentes/footer"

const Contactos = () => {
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
  imagen={contacto}
  titulo={"Tus Contactos"}
  texto1={"Gestiona tus contactos de manera sencilla y eficiente."}
  githubLink={ "https://github.com/titoshiro/lista-contactos-react-context" }
  pageLink={ "https://lista-contactos-react-context.vercel.app/"}
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

export default Contactos