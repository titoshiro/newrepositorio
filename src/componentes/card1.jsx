import PropTypes from 'prop-types';
import { FaGithubSquare, FaExternalLinkAlt } from 'react-icons/fa';
import "../css/card1.css";

const Card1 = ({
  imagen,
  titulo,
  texto1,
  texto2,
  githubLink,
  pageLink,
  mostrarIconoGithub = true,
  mostrarIconoPagina = true,
}) => {
  return (
    <>
      <div className="card border-0">
        <div className="row">
          <div className="col-md-6">
            <img src={imagen} className="img-fluid rounded-start" alt="..." style={{ width: "100%" }} />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title text-center">{titulo}</h5>
              <p className="card-text">{texto1}</p>
              <p className="card-text2">{texto2}</p>
              <div className="d-flex justify-content-space-around align-items-center">
                {mostrarIconoGithub && (
                  <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <FaGithubSquare size={50} />
                  </a>
                )}
                {mostrarIconoPagina && (
                  <a href={pageLink} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt size={50} />
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

Card1.propTypes = {
  imagen: PropTypes.string,
  titulo: PropTypes.string,
  texto1: PropTypes.string,
  texto2: PropTypes.string,
  githubLink: PropTypes.string,
  pageLink: PropTypes.string,
  mostrarIconoGithub: PropTypes.bool,
  mostrarIconoPagina: PropTypes.bool,
};

export default Card1;
