import {Container} from 'react-bootstrap';
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";


function Productos() {
  return (
    <Container>
        <h1 className="p-3 pt-5 mt-5 titulos text-center">Solicita tu turno</h1>
        <p className="f-text text-center fs-5 mb-5">Registrate como <strong>usuario</strong>, para recibir la mejor atención para tus ojos, te invitamos a registrarte y solicitar un turno con nuestros profesionales altamente capacitados. Tu salud visual es importante para nosotros, y estamos aquí para brindarte cuidados especializados.
        <br></br>
        <Link to="/contacto" className="btn btn-primary me-3 mt-3">
                      Registrarse <BsEye className="ms-2"/>
                    </Link>
        <Link to="/contacto" className="btn btn-primary mt-3">
                      Ya tengo cuenta <BsEye className="ms-2"/>
                    </Link>
        </p>
        
    </Container>
  );
}

export default Productos;