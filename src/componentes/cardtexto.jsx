
import PropTypes from 'prop-types';
import "../css/cardtexto.css"; // Asegúrate de tener el archivo CSS correspondiente

const Cardtexto = ({ titulo,titulo2, texto1, texto2 }) => {
  return (
    <div className="card border-0">
      <div className="row">
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title text-center">{titulo}</h5>
            <p className="card-text">{texto1}</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title text-center">{titulo2}</h5>
            <p className="card-text">{texto2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Cardtexto.propTypes = {
  titulo: PropTypes.string,
  titulo2: PropTypes.string,
  texto1: PropTypes.string,
  texto2: PropTypes.string,
};

export default Cardtexto;
