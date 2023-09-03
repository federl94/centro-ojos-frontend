import TablaGestionMedicos from "./Medicos/TablaGestionMedicos";
import ColumnaIzquierda from "./Turnos/ColumnaIzquierda";
import "../../css/administrador.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdmMedicos = () => {
  return (
    <>
      <Container fluid className="text-center">
        <Row className="text-center pt-3">
          <Col xs={3} className="d-none d-sm-block">
            <ColumnaIzquierda></ColumnaIzquierda>
          </Col>
          <Col xs={12} sm={9}>
            <div>
              <h2 className="fw-semibold titulos">Administrar Médicos:</h2>
              <hr />
              <p>Gestiona el staff médico:</p>
              <Link
                to={"/administrador/admmedicos/crear-medico"}

                className="btn btn-lg btn-success"
              >
                Nuevo Médico
              </Link>
            </div>

            <TablaGestionMedicos />
            <Link
              relative
              to="../"
              className="btn btn-success text-decoration-none text-light my-2 d-sm-none"
            >
              Volver a administrador
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdmMedicos;
