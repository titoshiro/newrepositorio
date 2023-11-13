import Navbar from "../componentes/navbar"
import Card1 from "../componentes/card1"
import Footer from "../componentes/footer"
import Cardtexto from "../componentes/cardtexto"
import bajafidelidad2 from "../imagenes/bajafidelidad2.png"
import altafidelidad2 from "../imagenes/altafidelidad2.png"
import nuevo8 from "../imagenes/nuevo8.png"

const Trabajo = () => {
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
  imagen={nuevo8}
  titulo={"Trabajo en mí"}
  texto1={
    "Nuestro producto es una aplicación de búsqueda laboral diseñada " +
    "específicamente para inmigrantes de primera generación. Con un " +
    "enfoque en la accesibilidad y la eliminación de barreras, nuestra " +
    "aplicación proporciona a los usuarios una plataforma fácil de usar para " +
    "encontrar empleo de manera efectiva en su nuevo país de acogida. " +
    "Ofrecemos funciones de traducción en tiempo real, búsqueda avanzada " +
    "de empleo y acceso directo a recursos comunitarios, todo ello diseñado " +
    "para capacitar a los inmigrantes y ayudarles a construir un futuro más " +
    "próspero en su nuevo hogar."
  }
  texto2={"Informe Completo"}
  githubLink="https://github.com/titoshiro/Battleship"
  pageLink="https://drive.google.com/file/d/1o7rTt3YHHyBnKsZyhUXlECFnz2beE59s/view?usp=drive_link"
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
  texto1={`
    Nuestra aplicación se enfoca en abordar el desafío que 
    enfrentan los inmigrantes de primera generación al buscar 
    empleo en un nuevo país. Al proporcionar funciones de 
    traducción en tiempo real y acceso a recursos locales, 
    eliminamos las barreras y empoderamos a los usuarios para 
    encontrar empleo de manera efectiva, ayudándoles a construir 
    un futuro más prometedor en su país de acogida.
  `}
  texto2={`
    Nuestra aplicación tiene como objetivo mejorar la búsqueda 
    de empleo para inmigrantes de primera generación, 
    proporcionando herramientas que faciliten la comprensión de 
    oportunidades laborales, superen barreras lingüísticas y 
    ofrezcan acceso a recursos locales. Ayudamos a los usuarios a 
    gestionar su propia búsqueda de empleo de manera efectiva y 
    a construir un futuro sólido en su país de acogida.
  `}
/>
<Card1
  imagen={bajafidelidad2}
  titulo={"Esquemas de página digitales"}
  texto1={
    "Para evaluar la usabilidad de la aplicación 'Trabajo en Mí', creé un prototipo de baja fidelidad que mapea el flujo de usuario, desde la visualización de oportunidades de empleo hasta la solicitud de empleo. Este enfoque nos permite realizar una evaluación efectiva de la experiencia del usuario en la aplicación."
  }
  githubLink="https://github.com/titoshiro/Battleship"
  pageLink="https://battleship-blue.vercel.app/"
  mostrarIconoGithub={false}  // Mostrará el icono de GitHub
  mostrarIconoPagina={false} // No mostrará el icono de Página
/>
<Card1
  imagen={altafidelidad2}
  titulo={"Prototipo de alta fidelidad"}
  texto1={
    "El prototipo de alta fidelidad de la aplicación 'Trabajo en Mí' ofrece una representación detallada y visualmente completa del flujo de usuario, desde la exploración de oportunidades de empleo hasta la presentación de solicitudes. Este prototipo mejorado facilita una evaluación exhaustiva de la usabilidad, garantizando una experiencia de usuario refinada y realista."
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

export default Trabajo