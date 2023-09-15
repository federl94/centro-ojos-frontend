import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { editarMedico, obtenerMedico } from "../../helpers/queries";
import { obtenerListaObrasSociales } from "../../helpers/queries";
import Swal from "sweetalert2";

const EditarMedico = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    getValues,
  } = useForm();
  const { id } = useParams();
  const navegacion = useNavigate();

  const [obrasSociales, setObrasSociales] = useState([]);
  const [diasTrabajo, setDiasTrabajo] = useState([]);

  useEffect(() => {
    obtenerMedico(id).then((respuesta) => {
      if (respuesta) {
        setValue("nombreMedico", respuesta.nombreMedico);
        setValue("email", respuesta.email);
        setValue("telefono", respuesta.telefono);
        setValue("especialidad", respuesta.especialidad);
        setValue("obrasSociales", respuesta.obrasSociales);
        setValue("horarios", respuesta.horarios);

        // Obtener los días de trabajo del médico y almacenarlos en el estado
        setDiasTrabajo(respuesta.diasTrabajo || []);
      }
    });

    obtenerListaObrasSociales()
      .then((respuesta) => {
        if (respuesta && Array.isArray(respuesta)) {
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
  }, [id, setValue]);

  const onSubmit = (medicoEditado) => {
    const diasSeleccionados = Object.keys(getValues("diasTrabajo")).filter(
      (key) => getValues("diasTrabajo")[key]
    );

    // Asignar los días seleccionados al objeto medicoEditado
    medicoEditado.diasTrabajo = diasSeleccionados;

    editarMedico(medicoEditado, id).then((respuesta) => {
      if (respuesta) {
        Swal.fire(
          "Médico editado",
          `El médico ${medicoEditado.nombreMedico} se editó correctamente`,
          "success"
        );
        reset();
        navegacion("/administrador/AdmMedicos");
      } else {
        Swal.fire(
          "Ocurrió un error",
          `El médico ${medicoEditado.nombreMedico} no pudo ser editado`,
          "error"
        );
      }
    });
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Editar médico</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
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
          <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
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
                message: "Ingresa un número de teléfono válido (10 dígitos)",
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
              <option key={obraSocial._id} value={obraSocial.nombreObraSocial}>
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
            {...register("diasTrabajo.Lunes")}
            defaultChecked={diasTrabajo.includes("Lunes")}
          />
          <Form.Check
            inline
            label="Martes"
            type="checkbox"
            {...register("diasTrabajo.Martes")}
            defaultChecked={diasTrabajo.includes("Martes")}
          />
          <Form.Check
            inline
            label="Miércoles"
            type="checkbox"
            {...register("diasTrabajo.Miércoles")}
            defaultChecked={diasTrabajo.includes("Miércoles")}
          />
          <Form.Check
            inline
            label="Jueves"
            type="checkbox"
            {...register("diasTrabajo.Jueves")}
            defaultChecked={diasTrabajo.includes("Jueves")}
          />
          <Form.Check
            inline
            label="Viernes"
            type="checkbox"
            {...register("diasTrabajo.Viernes")}
            defaultChecked={diasTrabajo.includes("Viernes")}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default EditarMedico;