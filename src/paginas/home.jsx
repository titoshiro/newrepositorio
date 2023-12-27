import "../css/index.css";
import Navbar from "../componentes/navbar";
import CardDemo from "../componentes/carddemo";
import adopta from "../imagenes/adopta.png";
import trabajo from "../imagenes/trabajoenmi.png";
import cine from "../imagenes/cineok1.png";
import talento from "../imagenes/talentohub.png";
import lipigas from "../imagenes/lipigas.png";
import kitchen from "../imagenes/kitchen.png";
import battle from "../imagenes/battleship.png";
import fastco from "../imagenes/fastco.png"
import star from "../imagenes/star.png"
import redponcho from "../imagenes/redponcho.png"
import Portada from "../componentes/portada"
import tus from "../imagenes/contactos.png";
import Footer from "../componentes/footer"

import "../css/home.css";
const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Navbar />
            <Portada/>
          </div>
        </div>
      </div>

      <h1 className="desarrollo">Desarrollo Web</h1>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <CardDemo imagen={talento} enlace={"/talentohub"} />
          </div>
          <div className="col-12 col-md-4">
            <CardDemo imagen={lipigas} enlace={"/lipigas"} />
          </div>
          <div className="col-12 col-md-4">
          <CardDemo imagen={fastco}  enlace={"/presentacion"}/>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <CardDemo imagen={battle} enlace={"/battle"} />
          </div>
          <div className="col-12 col-md-4">
            <CardDemo imagen={star}  enlace={"/star"}/>
          </div>
          <div className="col-12 col-md-4">
            <CardDemo imagen={tus}  enlace={"/contactos"}/>
          </div>
        </div>
        
     
          </div>
          <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <CardDemo imagen={kitchen} enlace={"/battle"} />
          </div>
          <div className="col-12 col-md-6">
            <CardDemo imagen={redponcho}  enlace={"/redponcho"}/>
          </div>
          
        </div>
          </div>
      <h1 className="desarrollo">Diseño UX</h1>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <CardDemo imagen={adopta} enlace={"/adopta"} />
          </div>
          <div className="col-12 col-md-4">
            <CardDemo imagen={trabajo}  enlace={"/trabajo"}/>
          </div>
          <div className="col-12 col-md-4">
            <CardDemo imagen={cine}  enlace={"/cine"}/>
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
  );
};

export default Home;
