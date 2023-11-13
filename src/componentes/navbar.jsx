import logo from "../imagenes/logo.png";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img className="logo-img" src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto "style={{ marginRight: '90px' }}>
            <a className="nav-link active" aria-current="page" href="/">
              Portafolio
            </a>
            <a className="nav-link active" href="sobremi">
              Sobre mí
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;