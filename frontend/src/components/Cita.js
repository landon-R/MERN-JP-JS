import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import Swal from 'sweetalert2';
import clienteAxios from '../config/axios'

const Cita = ({ e_cita, api}) => {


  const  elimina = async (id) => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        await clienteAxios.delete(`/pacientes/${id}`)
        console.log(id);
        api()
      }
    })
  }


  return (
    <Card className="m-2 text-decoration-none " >
      <Card.Header as="h5">{e_cita.nombre}   <span className="float-right h6" >fecha: {e_cita.fecha}</span>  </Card.Header>
      <Card.Body>
  <Card.Title>Propietario: <span className="text-muted" >{e_cita.propietario}</span> </Card.Title>
        <pre>
         {e_cita.sintomas}
        </pre>
        <Card.Text>
        telefono: {e_cita.telefono}
        </Card.Text>
        <Link to={`/pacientes/${e_cita._id}` } className="btn btn-info" >Ver mas </Link>
        <Button onClick={()=> elimina(e_cita._id)}  variant="danger" className="float-right" >Eliminar</Button>
      </Card.Body>
    </Card>
  );
};

export default Cita;
