import React from "react";
import avatarImage from "../../../assets/admin.png";
import "../../../css/administrador.css";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const ColumnaIzquierda = () => {
  return (
    <>
      <div className="columna-izquierda">
        <div className="encabezado">
          <h4 className="titulo text-wrap text-break titulos">Administrador</h4>
        </div>
        <div className="contenido">
          <img src={avatarImage} alt="Avatar" className="avatar" />
          <div className="d-grid">
            <Link
              relative
              to="../"
              className="btn btn-secondary text-decoration-none text-light my-2"
            >
              Inicio
            </Link>
            <Link
              relative
              to="../admPacientes"
              className="btn btn-secondary text-decoration-none text-light my-2"
            >
              Pacientes
            </Link>
            <Link
              relative
              to="../admturnos"
              className="btn btn-secondary text-decoration-none text-light my-2"
            >
              Turnos
            </Link>
            <Link
              relative
              to="../admusuarios"
              className="btn btn-secondary text-decoration-none text-light my-2"
            >
              Usuarios
            </Link>
            <Link
              relative
              to="../admmedicos"
              className="btn btn-secondary text-decoration-none text-light my-2"
            >
              Staff Médico
            </Link>
            <Link
              relative
              to="../admobrassociales"
              className="btn btn-secondary text-decoration-none text-light my-2"
            >
              Obras Sociales
            </Link>
            <Dropdown className="d-grid mt-2">
  <Dropdown.Toggle variant="secondary">
    Personal
  </Dropdown.Toggle>
  <Dropdown.Menu className="dropdown-menu">
    <Dropdown.Item href="../Error404" className="dropdown-item">Lista empleados</Dropdown.Item>
    <Dropdown.Item href="../Error404" className="dropdown-item">Sueldos</Dropdown.Item>
    <Dropdown.Item href="../Error404" className="dropdown-item">Vacaciones</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

          </div>
        </div>
        <span>Version 1.0.1</span>
      </div>
    </>
  );
};

export default ColumnaIzquierda;
