import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import { obtenerListaMedicos } from "../../helpers/queries";
import ItemMedico from "./ItemMedico";

function TablaGestionMedicos() {
  const pageSize = 3;
  const [medicos, setMedicos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [diasTrabajo, setDiasTrabajo] = useState([]); // Estado para almacenar los días de trabajo

  useEffect(() => {
    obtenerListaMedicos().then((respuesta) => {
      if (respuesta) {
        setMedicos(respuesta);

        // Obtener los días de trabajo del primer médico en la lista
        if (respuesta.length > 0) {
          setDiasTrabajo(respuesta[0].diasTrabajo || []);
        }
      } else {
        Swal.fire(
          "Error",
          "Intente realizar esta operación en unos minutos",
          "error"
        );
      }
    });
  }, []);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const medicosPaginados = medicos.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section>
      <div className="d-flex justify-content-between align-items-center mt-4">
        <h2 className="display-6 titulos">Médicos</h2>
      </div>
      <Table striped bordered size="sm" responsive className="text-center">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Especialidad</th>
            <th>Obras Sociales</th>
            <th>Días que trabaja</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {medicosPaginados.map((medico) => (
            <ItemMedico
              key={medico._id}
              medico={medico}
              setMedicos={setMedicos}
            ></ItemMedico>
          ))}
        </tbody>
      </Table>
      <Pagination>
        <Pagination.First onClick={() => handlePageChange(1)} />
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {Array.from({ length: Math.ceil(medicos.length / pageSize) }).map(
          (_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          )
        )}
        <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={endIndex >= medicos.length}
        />
        <Pagination.Last
          onClick={() => handlePageChange(Math.ceil(medicos.length / pageSize))}
        />
      </Pagination>
    </section>
  );
}

export default TablaGestionMedicos;