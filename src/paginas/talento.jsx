
import Navbar from "../componentes/navbar"
import Card1 from "../componentes/card1"
import nuevo1 from "../imagenes/nuevo1.png"
import Footer from "../componentes/footer"


const Talento = () => {
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
  imagen={nuevo1}
  titulo={"Talento Hub"}
  texto1={"Proyecto centrado en servicios digitales: desarrollo web, marketing y posicionamiento online para potenciar la presencia y éxito en la web."}
  githubLink={ "https://github.com/talentohub/TalentoHub" }
  pageLink={ "https://talentohub.cl/"}
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

export default Talento