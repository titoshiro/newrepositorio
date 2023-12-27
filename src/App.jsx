import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./paginas/home";
import Sobremi from "./paginas/sobremi";
import Talento from "./paginas/talento";
import Lipigas from "./paginas/lipigas";
import Kitchen from "./paginas/kitchen";
import Battle from "./paginas/battle";
import Star from "./paginas/star";
import Contacto from "./paginas/contactos";
import Adopta from "./paginas/adopta";
import Trabajo from "./paginas/trabajo";
import Cine from "./paginas/cine";
import Presentacion from "./paginas/presentacion";
import Redponcho from "./paginas/redponcho"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobremi" element={<Sobremi />} />
        <Route path="/talentohub" element={<Talento />} />
        <Route path="/lipigas" element={<Lipigas />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/battle" element={<Battle />} />
        <Route path="/star" element={<Star />} />
        <Route path="/contactos" element={<Contacto />} />
        <Route path="/adopta" element={<Adopta />} />
        <Route path="/trabajo" element={<Trabajo />} />
        <Route path="/cine" element={<Cine />} />
        <Route path="/presentacion" element={<Presentacion />} />
        <Route path="/redponcho" element={<Redponcho />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
