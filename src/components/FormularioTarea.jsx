import React from "react";
import { Button, Col, FormControl, Row, Stack } from "react-bootstrap";

const FormularioTarea = () => {
  return (
    <Stack direction="horizontal" gap={2}>
      <FormControl type="text" placeholder="Ingrese una tarea"></FormControl>
      <Button variant="primary">Agregar</Button>
    </Stack>

    // <Row>
    //   <Col md="10">
    //     <FormControl type="text" placeholder="Ingrese una tarea"></FormControl>
    //   </Col>
    //   <Col md="2">
    //     <Button variant="primary">Agregar</Button>
    //   </Col>
    // </Row>
  );
};

export default FormularioTarea;
