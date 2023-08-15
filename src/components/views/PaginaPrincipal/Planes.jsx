import { Card, Col, Row, Container } from "react-bootstrap";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import estudioojos from "../../../assets/estudio-ojos.jpg";
import tratamiento from "../../../assets/tratamientos.jpg"
import cirugia from "../../../assets/cirugias.jpg"


const Planes = () => {
  return (
    <section>
      <div className="banner-Planes pb-2">  
        <div className="p-4 my-4">
          <div className="p-4 text-dark container text-center mt-1">
            <h2 className=" text-dark fw-bold titulos f-title fs-1">
              Conocé alguno de los servicios que ofrecemos
            </h2>
            <br />
            <h3 className="f-text fs-2 mb-2">
              Te cuidamos la salud de tus ojos
            </h3>
            <br />
            <p className="f-text fs-4 mb-2 p-2">
            Visión clara, vida brillante. Cuidamos de tus ojos con exámenes precisos, tratamientos avanzados y atención personalizada. Tu salud ocular es nuestra prioridad.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Container fluid className="mb-5 titulos">
          <div className="py-2">
            <Row xs={1} md={3} lg={3} className="g-4">
              <Col>
                <Card className="box p-2 m-3 h-100">
                  <Card.Img
                    variant="top"
                    className="img-fluid img-thumbnail rounded-3"
                    src={estudioojos}
                    alt="cachorrito de perro y gatito durmiendo juntos"
                  />
                  <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                    <Card.Title>
                      <h3 className="f-title fw-bold">
                      Exámenes de la vista
                      </h3>
                    </Card.Title>
                    <br />
                    <Card.Text className="f-text fs-5">
                    - Evaluación de la agudeza visual.<br></br>
                    - Pruebas de refracción para determinar la necesidad de anteojos o lentes de contacto.<br></br>
                    - Exámenes de detección de enfermedades oculares.<br></br>
                    </Card.Text>
                    <Link to="/contacto" className="btn btn-primary mt-3">
                      Saber más <BsEye className="ms-2"/>{" "}
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="box p-2 m-3 h-100">
                  <Card.Img
                    variant="top"
                    className="img-fluid img-thumbnail rounded-3"
                    src={tratamiento}
                    alt="perro joven corriendo en el mar"
                  />
                  <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                    <Card.Title>
                      <h3 className="f-title fw-bold">
                        {" "}
                        Diagnóstico y tratamiento de enfermedades oculares
                      </h3>
                    </Card.Title>
                    <br />
                    <Card.Text className="f-text fs-5">
                    - Glaucoma.<br></br>
                    - Cataratas.<br></br>
                    - Degeneración macular relacionada con la edad (DMAE).<br></br>
                    - Retinopatía diabética.<br></br>
                    - Conjuntivitis, queratitis y otras infecciones oculares.
                    </Card.Text>
                    <Link to="/contacto" className="btn btn-primary mt-3">
                      Saber más <BsEye className="ms-2"/>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="box p-2 m-3 h-100">
                  <Card.Img
                    variant="top"
                    className="img-fluid img-thumbnail rounded-3"
                    src={cirugia}
                    alt="gato adulto acostado en la cama"
                  />
                  <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                    <Card.Title>
                      <h3 className="f-title fw-bold">
                        {" "}
                        Cirugías oculares
                      </h3>
                    </Card.Title>
                    <br />
                    <Card.Text className="f-text fs-5">
                    - Cirugía de cataratas: extracción del cristalino opaco y reemplazo con una lente artificial.<br></br>
                    - Cirugía refractiva: corrección de la visión mediante procedimientos como LASIK o PRK.<br></br>
                    - Cirugía de glaucoma.<br></br>
                    - Cirugía de retina.
                    </Card.Text>
                    <Link to="/contacto" className="btn btn-primary mt-3">
                      Saber más <BsEye className="ms-2"/>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Planes;
