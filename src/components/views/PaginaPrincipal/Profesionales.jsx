import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import '../../../css/profesionales.css';
import profesionaluno from "../../../assets/profesionaluno.jpg";
import profesionaldos from "../../../assets/profesionaldos.jpg";
import profesionaltres from "../../../assets/profesionaltres.jpg";
import profesionalcuatro from"../../../assets/profesionalcuatro.jpg";
const Profesionales = () => {
    return (
        <Container  className='mt-5 pt-4'>
            <h1 className='p-3 my-3 titulos text-center'>Nuestro equipo</h1>
        <Carousel >
            <Carousel.Item>
                <img
                    className="d-block w-100 imagenProfesionales"
                    src={profesionaluno}
                    alt="oculista-uno"
                />
                <Carousel.Caption className='text-dark'>
                    <h5>Dr. Nombre Apellido</h5>
                    <p>Oculista general</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 imagenProfesionales"
                    src={profesionaldos}
                    alt="oculista-dos"
                />
                <Carousel.Caption className='text-dark'>
                    <h5>Dr. Nombre Apellido</h5>
                    <p>Especialista en cuidado</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 imagenProfesionales"
                    src={profesionaltres}
                    alt="oftalmologa-tres"
                />
                <Carousel.Caption className='text-dark'>
                    <h5>Dra. Nombre Apellido</h5>
                    <p>
                        Especialista en cirugías
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 imagenProfesionales"
                    src={profesionalcuatro}
                    alt="Oftalmologa-cuatro"
                />
                <Carousel.Caption className='text-dark'>
                    <h5>Dra. Nombre Apellido</h5>
                    <p>
                        Especialista en ojos sensibles
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </Container>
    );
};

export default Profesionales;