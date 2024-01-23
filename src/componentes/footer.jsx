import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faSpotify } from '@fortawesome/free-brands-svg-icons';
import "../css/footer.css"
const Footer = () => {

  return (
    <>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="hecho col-md-4 mb-0 text-muted">© 2024. Hecho x Hector Silva</p>
        <ul className="nav col-md-4 justify-content-end">
        <div>
        <a className="iconos" href="https://www.linkedin.com/in/héctor-gerardo-silva-villena" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <div>
        <a className="iconos" href="https://github.com/titoshiro/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div>
        <a className="iconos" href="https://open.spotify.com/artist/2CSuYJKb4Mr9ta1lasaTjb?si=RNiCBVW9RDaQsHWHjkS3WQ" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSpotify} />
        </a>
      </div>
         
        </ul>
      </footer>
    </>
  )
}

export default Footer