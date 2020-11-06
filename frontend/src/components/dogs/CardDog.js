import React from "react";
import { Card, Button } from "react-bootstrap";


function CardDog(props) {
    const {e_dog} = props

    let url =  process.env.REACT_APP_BACKEND_URL
 
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={`${url}${e_dog.url}`} />
      <Card.Body>
        <Card.Title> {e_dog.name} </Card.Title>
        <Card.Title> {e_dog.raza} </Card.Title>
        <Card.Title> {e_dog.precio} </Card.Title>
        <Card.Text>
          {e_dog.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardDog;
