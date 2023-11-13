
import Navbar from "../componentes/navbar"
import Card1 from "../componentes/card1"
import batle from "../imagenes/nuevo4.png"
import Footer from "../componentes/footer"

const Battle = () => {
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
  imagen={batle}
  titulo={"Battle Ship"}
  texto1={"Juego de Battle Ship, un clásico desafiante. Atrévete a vencer a la computadora. ¡Demuestra tu destreza!"}
  githubLink={ "https://github.com/titoshiro/Battleship" }
  pageLink={ "https://battleship-blue.vercel.app/"}
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

export default Battle