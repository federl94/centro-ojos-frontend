import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import { obtenerListaObrasSociales } from "../../helpers/queries";
import ItemObraSocial from "./ItemObraSocial";
import Swal from "sweetalert2";

function TablaGestionObraSociales() {
  const pageSize = 3;
  const [obraSocial, setObraSocial] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    obtenerListaObrasSociales()
      .then((respuesta) => {
        if (respuesta && Array.isArray(respuesta)) {
          setObraSocial(respuesta);
        } else {
          Swal.fire(
            "Error",
            "Intente realizar esta operación en unos minutos",
            "error"
          );
        }
      })
      .catch((error) => {
        console.error("Error al obtener obras sociales:", error);
      });
  }, []);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const obrasSocialesPaginadas = obraSocial.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section>
      <div className="d-flex justify-content-between align-items-center mt-4">
        <h2 className="display-6 titulos">Obras Sociales</h2>
      </div>
      <Table striped bordered size="sm" responsive className="text-center">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cuit</th>
            <th>Telefono</th>
            <th>Planes</th>
            <th>Sitio Web</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {obrasSocialesPaginadas.map((obraSocial) => (
            <ItemObraSocial
              key={obraSocial._id}
              obraSocial={obraSocial}
              setObraSocial={setObraSocial}
            ></ItemObraSocial>
          ))}
        </tbody>
      </Table>
      <Pagination>
        <Pagination.First onClick={() => handlePageChange(1)} />
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {Array.from({ length: Math.ceil(obraSocial.length / pageSize) }).map(
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
          disabled={endIndex >= obraSocial.length}
        />
        <Pagination.Last
          onClick={() =>
            handlePageChange(Math.ceil(obraSocial.length / pageSize))
          }
        />
      </Pagination>
    </section>
  );
}

export default TablaGestionObraSociales;