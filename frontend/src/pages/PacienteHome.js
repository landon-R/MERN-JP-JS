import React from "react";
import { Link } from "react-router-dom";
import Cita from "../components/Cita";

function PacienteHome({ citas, api }) {
  if (citas.length === 0) return null;

  return (
    <div className="container-fluid" >
        <Link to="/nueva" className="btn btn-success float-right">
          {" "}
          Crear Cita
        </Link>{" "}
      <h3 className="text-center m-4 text-uppercase ">
        Lista de Nuevas Citas{" "}
      </h3>
      <div className="" >
        {citas.map((e_cita) => (
          <Cita key={e_cita._id} e_cita={e_cita} api={api} />
        ))}
      </div>
    </div>
  );
}

export default PacienteHome;
