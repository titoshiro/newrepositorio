import portada from "../imagenes/portada3.png"

const Portada = () => {
  return (
   <>
   <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={portada} className="d-block mx-auto w-100 h-50" alt="..."/>
    </div>
    </div>
</div>
   </>
  )
}

export default Portada