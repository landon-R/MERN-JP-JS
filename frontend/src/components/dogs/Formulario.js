import React from "react";
import { useState } from "react";
import {withRouter } from "react-router-dom"; 
import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import clienteAxios from "../../config/axios";

function Formulario(props) {
  const [datax, setDatax] = useState({
    name: "",
    raza: "",
    precio: "",
    description: "",
  });

  const [fileData, setFileData] = useState("");

  const { name, raza, precio, description } = datax;

  const obtenerData = (e) => {
    setDatax({
      ...datax,
      [e.target.name]: e.target.value,
    });
  };

  const obtenerFile = (e) => {
    setFileData(e.target.files[0]);
  };

  const subirData = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", datax.name);
    formData.append("raza", datax.raza);
    formData.append("precio", datax.precio);
    formData.append("description", datax.description);
    formData.append("image", fileData);

    if (!name || !raza || !precio || !description) {
      Swal.fire({
        icon: 'error',
        title: 'todos los campos son necesarios',
        showConfirmButton: true,
      })
    } else {
      const envio = await clienteAxios.post("/dog", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      
      Swal.fire({
        icon: 'success',
        title: envio.data.message,
        showConfirmButton: true,
        timer: 1500
      })
      props.history.push('/listadogs')  
      
    }

  };

  return (
    <div className="formulario">
      <Form onSubmit={subirData}>
        <h3 className="text-center">Crea Nuevo Dog</h3>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Ingrese Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre"
            name="name"
            onChange={obtenerData}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Raza</Form.Label>
          <Form.Control
            type="text"
            placeholder="raza"
            name="raza"
            onChange={obtenerData}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            placeholder="Precio"
            onChange={obtenerData}
            name="precio"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Descripcion</Form.Label>
          <textarea
            className="form-control"
            name="description"
            rows="2"
            onChange={obtenerData}
          ></textarea>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Sube una Photo</Form.Label>
          <Form.Control type="file" name="image" onChange={obtenerFile} />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button block variant="primary" type="submit" className="w-50">
            Subir Imagen
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default withRouter(Formulario)
