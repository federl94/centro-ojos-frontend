import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { editarMedico, obtenerMedico } from "../../helpers/queries";
import Swal from "sweetalert2";

const EditarMedico = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const { id } = useParams();
  const navegacion = useNavigate();

  useEffect(() => {
    obtenerMedico(id).then((respuesta) => {
      if (respuesta) {
        setValue("nombreMedico", respuesta.nombreMedico);
        setValue("email", respuesta.email);
        setValue("telefono", respuesta.telefono);
        setValue("especialidad", respuesta.especialidad);
        setValue("obrasSociales", respuesta.obrasSociales);
      }
    });
  }, []);

  const onSubmit = (medicoEditado) => {
    console.log(medicoEditado);
    editarMedico(medicoEditado, id).then((respuesta) => {
      if (respuesta) {
        Swal.fire(
          "Medico editado",
          `El medico ${medicoEditado.nombreMedico} se editó correctamente`,
          "success"
        );
        reset();
        navegacion("/administrador/AdmMedicos");
      } else {
        Swal.fire(
          "Ocurrió un error",
          `El medico ${medicoEditado.nombreMedico} no pudo ser editado`,
          "error"
        );
      }
    });
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Editar medico</h1>
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
            type="text"
            placeholder="Prensa, SanCor..."
            {...register("obrasSociales", {
              required: "La Obra Social es obligatoria",
              minLength: {
                value: 3,
                message: "La cantidad minima de carácteres es 3",
              },
              maxLength: {
                value: 200,
                message: "La cantidad maxima de carácteres es 200",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.obrasSociales?.message}
          </Form.Text>
        </Form.Group>        
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default EditarMedico;
