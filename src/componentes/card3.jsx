import PropTypes from 'prop-types';
import { FaGithubSquare, FaLinkedin, FaSpotify,FaExternalLinkAlt} from 'react-icons/fa';
import "../css/card3.css";

const Card3 = ({
  imagen,
  titulo,
  texto1,
  texto2,
  pageLink,
  githubLink,
  linkedinLink,
  spotifyLink,
  mostrarIconoGithub = true,
  mostrarIconoLinkedin = true,
  mostrarIconoSpotify = true,
  mostrarIconoPagina = true,
}) => {
  return (
    <>
      <div className="card border-0">
        <div className="row">
          <div className="col-md-6">
            <img src={imagen} className="img-fluid2 rounded-start" alt="..." style={{ width: "100%" }} />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title text-center">{titulo}</h5>
              <p className="card-text">{texto1}</p>
              <p className="card-text2">{texto2}</p>
              <div className="d-flex justify-content-space-around align-items-center">
              {mostrarIconoPagina && (
                  <a href={pageLink} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt size={50} />
                  </a>
                )}
                {mostrarIconoGithub && (
                  <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <FaGithubSquare size={50} />
                  </a>
                )}
                {mostrarIconoLinkedin && (
                  <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={50} />
                  </a>
                )}
                {mostrarIconoSpotify && (
                  <a href={spotifyLink} target="_blank" rel="noopener noreferrer">
                    <FaSpotify size={50} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Card3.propTypes = {
  imagen: PropTypes.string,
  titulo: PropTypes.string,
  texto1: PropTypes.string,
  texto2: PropTypes.string,
  githubLink: PropTypes.string,
  linkedinLink: PropTypes.string,
  spotifyLink: PropTypes.string,
  mostrarIconoGithub: PropTypes.bool,
  mostrarIconoLinkedin: PropTypes.bool,
  mostrarIconoSpotify: PropTypes.bool,
};

export default Card3;
