
const Footer = () => {
  return (
    <>
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-muted" style={{fontfamily: 'Quicksand',color:" #016E86" }}>© 2023. Hecho x Hector Silva</p>

    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <svg className="bi me-2" width="40" height="32"><use></use></svg>
    </a>

    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Portafolio</a></li>
      <li className="nav-item"><a href="sobremi" className="nav-link px-2 text-muted">Sobre mí</a></li>
    </ul>
  </footer>
    </>
  )
}

export default Footer