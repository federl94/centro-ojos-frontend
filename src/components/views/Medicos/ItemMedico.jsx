import { TfiPencil, TfiTrash } from 'react-icons/tfi';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { borrarMedico, obtenerListaMedicos } from '../../helpers/queries';

const ItemMedico = ({medico, setMedico}) => {

    const borrar = () => {
        Swal.fire({
            title: '¿Seguro que quiere borrar el siguiente médico?',
            text: "El siguiente cambio no podra ser revertido",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#4D91CD',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, quiero borrar!',
            cancelButtonText: 'Cancelar'
        }).then((resultado) =>{
        if (resultado.isConfirmed){
            borrarMedico(medico._id).then((respuesta) =>{
               if (respuesta.status === 200){
                   obtenerListaMedicos().then((respuesta)=>{
                    if (respuesta)
        {
            setMedico(respuesta);
        } else{
            Swal.fire("Error", "Intente realizar esta operacion en unos minutos", "error");
        }    
              })
              Swal.fire(
                "Borrado!",
                "El médico fue borrado.",
                "success"
              )
              }else{
                Swal.fire({
                    title: "Lo siento!",
                    text: "El médico no pudo ser eliminado.",
                    icon: "error",
                    confirmButtonColor:" #4D91CD",
                });
              }
               })
            }
        })
            }
        
    return (
        <tr>
        <td>{medico.nombreMedico}</td>
        <td>{medico.email}</td>
        <td>{medico.telefono}</td>
        <td>{medico.especialidad}</td>
        <td>{medico.obrasSociales}</td>
        <td>{medico.horarios}</td>
        <td className='text-center'>
            <Link className="mx-3 p-2 px-2 mb-1 btn btn-primary" to={"editar-medico/"+medico._id}><TfiPencil /></Link>
        <Button variant="danger mt-1" onClick={borrar}><TfiTrash /></Button>
        </td>
    </tr>
        );
};

export default ItemMedico;