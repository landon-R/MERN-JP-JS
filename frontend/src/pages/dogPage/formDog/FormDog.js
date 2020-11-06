import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import Formulario from "../../../components/dogs/Formulario";
import './formdog.scss'


function FormDog() {
  return (
    <div className='formdog'  >
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example"  >
        <Tab eventKey="home" title="Home" className='izquierda' >
         <div className='images' >
         <img src="https://fondosmil.com/fondo/20088.jpg" alt="dd"/>
         </div>
        </Tab>
        <Tab eventKey="profile" title="Form Dog">
          <Formulario />
        </Tab>
      </Tabs>
    </div>
  );
}

export default FormDog;
