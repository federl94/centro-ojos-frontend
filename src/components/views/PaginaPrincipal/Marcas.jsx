import Carousel from "react-bootstrap/Carousel";
import instalacionesuno from "../../../assets/instalacionesuno.jpg";
import instalacionesdos from "../../../assets/instalacionesdos.jpg";
import instalacionestres from "../../../assets/instalacionestres.jpg";

function Marcas() {
  return (
    <Carousel>
      <Carousel.Item className="mb-3">
        <img
          className="d-block w-100 imagenProfesionales"
          src={instalacionesuno}
          alt="consultorio"
        />
      </Carousel.Item>
      <Carousel.Item className="mb-3">
        <img
          className="d-block w-100 imagenProfesionales"
          src={instalacionesdos}
          alt="consultorio"
        />
      </Carousel.Item>
      <Carousel.Item className="mb-3">
        <img
          className="d-block w-100 imagenProfesionales"
          src={instalacionestres}
          alt="sala de estar"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Marcas;
