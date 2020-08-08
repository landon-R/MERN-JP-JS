import React from "react";
import { Card, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Swal from 'sweetalert2'
import clienteAxios from '../config/axios'

function CitaUser(props) {



  const data = props.citas.filter((cit) => cit._id === props.match.params.id);

  // if(!data) {
  //    props.history.push('/')
  //    return null
  // }

     
  console.log(props);
  console.log(data);

  const eliminaCita = async (id) => {
    Swal.fire({
      title: 'Esta Seguro?',
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
        // deleted cita
        await clienteAxios.delete(`/pacientes/${id}`)
        props.history.push('/lista')
        props.api()
      }
    })



}

  return (
    <div className="mt-4 d-flex justify-content-center">
      {data.map((cita) => (
        <Card key={cita._id} style={{ width: "38rem" }}>
          <Card.Body>
            <Card.Title> {cita.nombre} </Card.Title>
            <h6> FECHA:  <span className="text-muted" >{cita.fecha}</span> </h6>
            <h6> HORA:  <span className="text-muted" >{cita.hora}</span> </h6>
            <h6> TELEFONO:  <span className="text-muted" >{cita.telefono}</span> </h6>
            <h6> SINTOMAS: <p className="text-muted" >{cita.sintomas}</p> </h6>
            <Button style={{borderRadius: "20px"}}  block  variant="danger" 
            onClick={()=> eliminaCita(cita._id)} > Eliminar X &times; </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default withRouter(CitaUser);
