import Navbar from "../componentes/navbar"
import Card1 from "../componentes/card1"
import adopta from "../imagenes/nuevo7.png"
import Footer from "../componentes/footer"
import Cardtexto from "../componentes/cardtexto"
import bajafidelidad1 from "../imagenes/bajafidelidad1.png"
import altafidelidad from "../imagenes/altafidelidad1.png"

const Adopta = () => {
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
  imagen={adopta}
  titulo={"Adopta Amigos"}
  texto1={
    "Adopta Amigos es una aplicación móvil dedicada a la " +
    "adopción responsable de mascotas. La aplicación " +
    "facilita el proceso de encontrar y adoptar una " +
    "mascota que se adapte a tu estilo de vida y " +
    "preferencias personales. Además de las opciones de " +
    "adopción, Adopta Amigos ofrece un blog de noticias " +
    "sobre cuidado de mascotas y una sección para " +
    "comprar utensilios y suministros esenciales para el " +
    "bienestar de los animales."
  }
  texto2={"Informe Completo"}
  githubLink="https://github.com/titoshiro/Battleship"
  pageLink="https://drive.google.com/file/d/1yt9wLNWWsDPsvPSWzf1GW6F2JFxxUjFe/view?usp=drive_link"
  mostrarIconoGithub={false}  // Mostrará el icono de GitHub
  mostrarIconoPagina={true} // No mostrará el icono de Página
/>

  </div>
</div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
          <Cardtexto
  titulo={"El Problema:"}
  titulo2={"El objetivo:"}
  texto1={
    "Adopta Amigos soluciona la falta de " +
    "organización y opciones de filtrado en otras " +
    "aplicaciones y sitios web de adopción de " +
    "mascotas, facilitando a los usuarios encontrar " +
    "mascotas que se ajusten a sus preferencias " +
    "específicas, como tamaño, edad y nivel de " +
    "energía, para una adopción más personalizada " +
    "y eficiente."
  }
  texto2={
    "El objetivo principal de la aplicación es " +
    "proporcionar a los amantes de los animales " +
    "una plataforma fácil de usar para buscar, " +
    "encontrar y adoptar mascotas de manera " +
    "efectiva, brindando opciones de filtrado para " +
    "que los usuarios puedan encontrar mascotas " +
    "que se adapten a sus necesidades y " +
    "preferencias individuales. Además, la " +
    "aplicación busca fomentar la adopción de " +
    "animales en lugar de la compra, promoviendo " +
    "el cuidado responsable de mascotas."
  }
/>
<Card1
  imagen={bajafidelidad1}
  titulo={"Esquemas de página digitales"}
  texto1={
    "A medida que avanzaba la fase inicial de diseño, me " +
    "aseguré de que los diseños de las pantallas " +
    "evolucionaran en línea con los comentarios y los " +
    "hallazgos de la investigación de usuarios."
  }
  githubLink="https://github.com/titoshiro/Battleship"
  pageLink="https://battleship-blue.vercel.app/"
  mostrarIconoGithub={false}  // Mostrará el icono de GitHub
  mostrarIconoPagina={false} // No mostrará el icono de Página
/>
<Card1
  imagen={altafidelidad}
  titulo={"Prototipo de alta fidelidad"}
  texto1={
    "El prototipo de alta fidelidad final de la " +
    "aplicación de adopción de mascotas " +
    "presenta flujos de usuario más intuitivos y " +
    "simplificados. Se ha mejorado " +
    "significativamente la facilidad de uso al " +
    "permitir a los usuarios filtrar y seleccionar " +
    "mascotas de manera más eficiente. Ahora, " +
    "los usuarios pueden elegir mascotas tanto " +
    "para sí mismos como para sus acompañantes " +
    "de manera sencilla. Este diseño mejorado " +
    "garantiza que el proceso de adopción sea " +
    "más conveniente y accesible, brindando a los " +
    "usuarios una experiencia sin complicaciones " +
    "al encontrar y adoptar a su compañero " +
    "peludo."
  }
  githubLink="https://github.com/titoshiro/Battleship"
  pageLink="https://battleship-blue.vercel.app/"
  mostrarIconoGithub={false}  // Mostrará el icono de GitHub
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

export default Adopta