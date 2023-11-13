
import Navbar from "../componentes/navbar"
import Card1 from "../componentes/card1"
import lipi from "../imagenes/nuevo2.png"
import Footer from "../componentes/footer"


const Lipigas = () => {
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
  imagen={lipi}
  titulo={"Lipigas"}
  texto1={"Creé este proyecto demo como una iniciativa para fortalecer mis habilidades en React y explorar nuevas tecnologías."}
  githubLink={ "https://github.com/titoshiro/lipigas" }
  pageLink={ "https://lipigas.vercel.app/"}
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

export default Lipigas