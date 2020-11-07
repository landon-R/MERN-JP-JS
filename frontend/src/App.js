import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import clienteAxios from "./config/axios";

//components
import PacienteHome from "./pages/PacienteHome";
import { useState } from "react";
import { useEffect } from "react";
import Navigation from "./layout/Navigation";
import NuevaHome from "./pages/NuevaHome";
import CitaUser from "./pages/CitaUser";
//dogs
import ListaDogs from "./pages/dogPage/listaDogs/ListaDogs";
import FormDog from "./pages/dogPage/formDog/FormDog";


function App() {
  const [citas, setCitas] = useState([]);
  
  useEffect(() => {
    api()
  }, []);


  const api = async () => {
    const res = await clienteAxios.get("/pacientes");
    console.log(res.data);
    setCitas(res.data);
  }
  
  
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <div className="" >
          <Switch>
            <Route
              exact={true}
              path="/lista"
              component={() => <PacienteHome citas={citas} api={api} />}
            />
            <Route
              exact={true}
              path="/nueva"
              component={()=> <NuevaHome api={api} />}
            />
            <Route
              exact={true}
              path="/pacientes/:id"
              component={()=> <CitaUser  citas={citas} api={api}/>}
            />
            <Route
              exact={true}
              path="/listadogs"
              component={ ListaDogs}
            />
            <Route
              exact={true}
              path="/formdog"
              component={FormDog}
            />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
