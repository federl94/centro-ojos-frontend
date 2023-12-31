import Banner from "./PaginaPrincipal/Banner.jsx";
import Planes from "./PaginaPrincipal/Planes.jsx";
import Marcas from "./PaginaPrincipal/Marcas.jsx";
import Productos from "./PaginaPrincipal/Productos.jsx";
import Profesionales from "./PaginaPrincipal/Profesionales.jsx";
import { Container } from "react-bootstrap";
 
const Inicio = () => {
  return (
    <div className="fondoGeneral tipografia">
      <Container fluid>
        <Banner />
      </Container>
      <Planes></Planes>
      <Profesionales />
      <Productos></Productos>
      <Marcas></Marcas>
    </div>
  );
};

export default Inicio;
