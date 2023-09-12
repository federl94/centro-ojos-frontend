import { TfiPencil, TfiTrash } from 'react-icons/tfi';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { borrarObraSocial, obtenerListaObrasSociales } from '../../helpers/queries';

const ItemObraSocial = ({ obraSocial, setObraSocial }) => {

    const borrar = () => {
        Swal.fire({
            title: '¿Seguro que quiere borrar la siguiente obra social?',
            text: "El siguiente cambio no podra ser revertido",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#4D91CD',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, quiero borrar!',
            cancelButtonText: 'Cancelar'
        }).then((resultado) =>{
        if (resultado.isConfirmed){
            borrarObraSocial(obraSocial._id).then((respuesta) =>{
               if (respuesta.status === 200){
                   obtenerListaObrasSociales().then((respuesta)=>{
                    if (respuesta)
        {
            setObraSocial(respuesta);
        } else{
            Swal.fire("Error", "Intente realizar esta operacion en unos minutos", "error");
        }    
              })
              Swal.fire(
                "Borrado!",
                "La Obra Social fue borrada.",
                "success"
              )
              }else{
                Swal.fire({
                    title: "Lo siento!",
                    text: "La Obra Social no pudo ser eliminada.",
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
        <td>{obraSocial.nombreObraSocial}</td>
        <td>{obraSocial.cuit}</td>
        <td>{obraSocial.telefono}</td>
        <td>{obraSocial.planes}</td>
        <td>{obraSocial.web}</td>
        <td className='text-center'>
            <Link className="mx-3 p-2 px-2 mb-1 btn btn-primary" to={"editar-obrasocial/"+obraSocial._id}><TfiPencil /></Link>
        <Button variant="danger mt-1" onClick={borrar}><TfiTrash /></Button>
        </td>
    </tr>
        );
};

export default ItemObraSocial;