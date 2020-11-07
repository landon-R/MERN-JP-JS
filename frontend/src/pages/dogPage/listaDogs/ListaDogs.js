import React, { useState, useEffect } from "react";
import clienteAxios from "../../../config/axios";
import CardDog from "../../../components/dogs/CardDog";
import "./listadogs.scss";

function ListaDogs() {
  const [dataDog, setdataDog] = useState([]);

  const obtenerData = async () => {
    const rex = await clienteAxios.get("/dog");
    setdataDog(rex.data.docs);
    console.log(rex.data.docs);
  };

  useEffect(() => {
    obtenerData();
  }, []);

  return (
    <div className="lista">
      <h3 className="text-center my-2">lista dogs</h3>
      <div className="row">
        {dataDog.map((e_dog) => (
          <CardDog e_dog={e_dog} key={e_dog._id} />
        ))}
      </div>
    </div>
  );
}

export default ListaDogs;
