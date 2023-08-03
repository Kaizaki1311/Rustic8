import Header from "./Componentes/Header";
import SeccionSobre from "./Componentes/SobreNosotros";
import SeccionMenu from "./Componentes/Menu/Menus";
import SeccionContacto from "./Componentes/Contacto";

import Footer from "./Componentes/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <SeccionSobre />
      <SeccionMenu />
      <SeccionContacto />
      <Footer />
    </div>
  );
}

export default App;
