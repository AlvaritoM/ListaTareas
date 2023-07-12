import React from "react";
import { Button, Stack } from "react-bootstrap";

const ItemTarea = () => {
  return (
    <Stack direction="horizontal">
      <div>Hola</div>
      <Button variant="danger" className="mx-auto">
        Quitar
      </Button>
    </Stack>
  );
};

export default ItemTarea;
