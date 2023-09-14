import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { crearMedico } from "../../helpers/queries";
import { obtenerListaObrasSociales } from "../../helpers/queries";

const CrearMedico = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Estado local para almacenar las obras sociales
  const [obrasSociales, setObrasSociales] = useState([]);
  const [diasTrabajo, setDiasTrabajo] = useState([]); // Estado para almacenar los días de trabajo

  useEffect(() => {
    // Llamar a la función para obtener la lista de obras sociales
    obtenerListaObrasSociales()
      .then((respuesta) => {
        if (respuesta && Array.isArray(respuesta)) {
          // Almacena las obras sociales en el estado local
          setObrasSociales(respuesta);
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

  const onSubmit = (medicoNuevo) => {
    // Obtener los días seleccionados en un array
    const diasSeleccionados = medicoNuevo.diasTrabajo || [];

    // Asignar los días seleccionados al objeto medicoNuevo
    medicoNuevo.diasTrabajo = diasSeleccionados;

    crearMedico(medicoNuevo).then((respuesta) => {
      if (respuesta.status === 201) {
        Swal.fire(
          "Medico creado",
          `El médico ${medicoNuevo.nombreMedico} fue creado correctamente`,
          "success"
        );
        reset();
      } else {
        Swal.fire(
          "Ocurrio un error",
          `El médico ${medicoNuevo.nombreMedico} no pudo ser creado`,
          "error"
        );
      }
    });
  };

  return (
    <section className="mainSection fondoRegistro titulos">
      <div className="container">
        <h1 className="display-4 mt-5 text-center titulos">Nuevo Medico</h1>
        <hr />
        <Row className="justify-content-center w-100 ps-4">
          <Col xs={12} sm={9} md={4}>
            <Form
              onSubmit={handleSubmit(onSubmit)}
              className="my-5 contenedorFormulario p-4"
            >
              <Form.Group className="mb-3" controlId="formPaciente">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: Juan Pérez"
                  {...register("nombreMedico", {
                    required: "El nombre del medico es obligatorio",
                    minLength: {
                      value: 2,
                      message: "La cantidad minima de carácteres es 2",
                    },
                    maxLength: {
                      value: 50,
                      message: "La cantidad maxima de carácteres es 50",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.nombreMedico?.message}
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPaciente">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ej: juanperez10@gmail.com"
                  {...register("email", {
                    required: "El email es obligatorio",
                    maxLength: {
                      value: 50,
                      message: "La cantidad maxima de carácteres es 50",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.email?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPaciente">
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ej: 3816810178"
                  {...register("telefono", {
                    required: "El telefono del medico es obligatorio",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message:
                        "Ingresa un número de teléfono válido (10 dígitos)",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.telefono?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPaciente">
                <Form.Label>Especialidad</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: Rivadavia 1050"
                  {...register("especialidad", {
                    required: "La especialidad del médico es obligatoria",
                    minLength: {
                      value: 3,
                      message: "La cantidad minima de carácteres es 3",
                    },
                    maxLength: {
                      value: 40,
                      message: "La cantidad maxima de carácteres es 40",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.especialidad?.message}
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPaciente">
                <Form.Label>Obras Sociales</Form.Label>
                <Form.Control
                  as="select"
                  {...register("obrasSociales", {
                    required: "La Obra Social es obligatoria",
                  })}
                >
                  <option value="" disabled>
                    Seleccione una Obra Social
                  </option>
                  {obrasSociales.map((obraSocial) => (
                    <option
                      key={obraSocial._id}
                      value={obraSocial.nombreObraSocial}
                    >
                      {obraSocial.nombreObraSocial}
                    </option>
                  ))}
                </Form.Control>
                <Form.Text className="text-danger">
                  {errors.obrasSociales?.message}
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Días que trabaja</Form.Label>
                <br />
                <Form.Check
                  inline
                  label="Lunes"
                  type="checkbox"
                  {...register("diasTrabajo")}
                  value="Lunes"
                  onChange={(e) => handleDiasTrabajoChange("Lunes", e)}
                />
                <Form.Check
                  inline
                  label="Martes"
                  type="checkbox"
                  {...register("diasTrabajo")}
                  value="Martes"
                  onChange={(e) => handleDiasTrabajoChange("Martes", e)}
                />
                <Form.Check
                  inline
                  label="Miércoles"
                  type="checkbox"
                  {...register("diasTrabajo")}
                  value="Miércoles"
                  onChange={(e) => handleDiasTrabajoChange("Miércoles", e)}
                />
                <Form.Check
                  inline
                  label="Jueves"
                  type="checkbox"
                  {...register("diasTrabajo")}
                  value="Jueves"
                  onChange={(e) => handleDiasTrabajoChange("Jueves", e)}
                />
                <Form.Check
                  inline
                  label="Viernes"
                  type="checkbox"
                  {...register("diasTrabajo")}
                  value="Viernes"
                  onChange={(e) => handleDiasTrabajoChange("Viernes", e)}
                />
              </Form.Group>

              <div className="text-center">
                <Button variant="primary" type="submit">
                  Guardar
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default CrearMedico;