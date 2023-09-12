import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { editarObraSocial, obtenerObraSocial } from "../../helpers/queries";
import Swal from "sweetalert2";

const EditarObraSocial = () => {
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
    obtenerObraSocial(id).then((respuesta) => {
      if (respuesta) {
        setValue("nombreObraSocial", respuesta.nombreObraSocial);
        setValue("cuit", respuesta.cuit);
        setValue("telefono", respuesta.telefono);
        setValue("planes", respuesta.planes);
        setValue("web", respuesta.web);
      }
    });
  }, []);

  const onSubmit = (obraSocialEditada) => {
    console.log(obraSocialEditada);
    editarObraSocial(obraSocialEditada, id).then((respuesta) => {
      if (respuesta) {
        Swal.fire(
          "Obra Social actualizada",
          `La Obra Social ${obraSocialEditada.nombreObraSocial} se editó correctamente`,
          "success"
        );
        reset();
        navegacion("/administrador/AdmObrasSociales");
      } else {
        Swal.fire(
          "Ocurrió un error",
          `La Obra Social ${obraSocialEditada.nombreObraSocial} no pudo ser editada`,
          "error"
        );
      }
    });
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Editar Obra Social</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formPaciente">
        <Form.Label>Nombre Obra Social</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: SanCor"
            {...register("nombreObraSocial", {
              required: "El nombre de la obra social es obligatorio",
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
            {errors.nombreObraSocial?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPaciente">
          <Form.Label>Cuit</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 30-11223344-5"
            {...register("cuit", {
              required: "El cuit es obligatorio",
              pattern: {
                value: /\b(20|23|24|27|30|33|34)(\D)?[0-9]{8}(\D)?[0-9]/,
                message: "Ingresa un número de cuit válido.",
              },
              maxLength: {
                value: 13,
                message: "La cantidad maxima de carácteres es 13",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.cuit?.message}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPaciente">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 3816810178"
            {...register("telefono", {
              required: "El telefono de la obra social es obligatorio",
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
          <Form.Label>Tipos de planes</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Plan 1000, Plan 2000, etc..."
            {...register("planes", {
              required: "El tipo de plan es obligatorio",
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
            {errors.planes?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPaciente">
          <Form.Label>Sitio web</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: www.sancorsalud.com.ar"
            {...register("web", {
              required: "La página web es obligatoria, en caso de no poseer indique que no tiene.",
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
            {errors.web?.message}
          </Form.Text>
        </Form.Group>          
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default EditarObraSocial;
