// CardDemo.jsx

import PropTypes from "prop-types";
import "../css/cardcomponente.css";

const CardDemo = ({ imagen, enlace }) => {
  return (
    <a className="enlacecard" href={enlace}>
      <section className="wrapper-new mb-5">
        <div className="card-new" data-effect="zoom-new">
         
          <div className="card__image-new">
            <img src={imagen} alt="Short description" />
          </div>
          <div className="card__overlay">
           
          </div>
        </div>
      </section>
    </a>
  );
};

CardDemo.propTypes = {
  imagen: PropTypes.string.isRequired,
  texto1: PropTypes.string,
  enlace: PropTypes.string,
};

export default CardDemo;
