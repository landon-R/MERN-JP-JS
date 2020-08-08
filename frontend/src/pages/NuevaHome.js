import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom"; //withrouter  para usar history push
import clienteAxios from "../config/axios";

function NuevaHome(props) {
  const [cita, setCita] = useState({
    nombre: "",
    propietario: "",
    sintomas: "",
    fecha: "",
    hora: "",
    telefono: "",
  });

  const cargarDatos = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const guardarCita = async (e) => {
    e.preventDefault();
    await clienteAxios.post("/pacientes", cita);
    props.history.push('/lista')  //  se utiliza para redireccionar a un ussuario
    props.api()
  };

  return (
    <div className="container" >
      <form className="bg-white p-5 bordered mt-5" onSubmit={guardarCita}>
        <Link to="/lista" className="btn btn-success float-right px-4">
          {" "}
          Volver
        </Link>{" "}
        <h3>Crear Nueva Cita</h3>
        <div className="form-group">
          <label htmlFor="nombre">Nombre Mascota</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            placeholder="Nombre Mascota"
            onChange={cargarDatos}
          />
        </div>
        <div className="form-group">
          <label htmlFor="propietario">Nombre Propietario</label>
          <input
            type="text"
            className="form-control "
            id="propietario"
            name="propietario"
            placeholder="Nombre Propietario"
            onChange={cargarDatos}
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="tel"
            className="form-control "
            id="telefono"
            name="telefono"
            placeholder="Teléfono"
            onChange={cargarDatos}
          />
        </div>
        <div className="form-group">
          <label htmlFor="fecha">Fecha Alta</label>
          <input
            type="date"
            className="form-control "
            id="fecha"
            name="fecha"
            onChange={cargarDatos}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hora">Hora Alta</label>
          <input
            type="time"
            className="form-control"
            id="hora"
            name="hora"
            onChange={cargarDatos}
          />
        </div>
        <div className="form-group">
          <label htmlFor="sintomas">Síntomas</label>
          <textarea
            className="form-control"
            name="sintomas"
            rows="4"
            onChange={cargarDatos}
          ></textarea>
        </div>
        <input
          style={{ borderRadius: "50px" }}
          type="submit"
          className="btn btn-primary mt-3 btn-block p-3 text-uppercase font-weight-bold"
          value="Crear Cita"
        />
      </form>
    </div>
  );
}

export default withRouter(NuevaHome)
