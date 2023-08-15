import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../../../css/banner.css"

const Banner = () => {
  return (
    <>
      <section className="bannerContainer text-light my-2">
        <aside>
          <img
            className="img-fluid d-md-none"
            src="https://images.pexels.com/photos/160722/cat-tiger-getiegert-feel-at-home-160722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Imagen banner gatito"
          />
        </aside>
        <aside className="ms-lg-5 d-flex flex-column justify-content-lg-center justify-content-md-end h-100 align-items-center align-items-md-center text-center text-md-start widthBanner">
          <h1 className="fs-1 mt-md-5 mt-2 mt-md-0 mx-2 mx-md-0 fw-bolder text-dark">
            ¡Bienvenidos al <br className="d-none d-md-block" /> Centro Oftalmológico!
          </h1>          
          <div className="button-container">

          <Link to="/nosotros" className="btn btn-primary expand-button btn-lg my-4">
            ¿Quienes somos? <BsEye  className="ms-2"/>
          </Link>
          </div>
        </aside>
      </section>    
    </>
  );
};

export default Banner;
