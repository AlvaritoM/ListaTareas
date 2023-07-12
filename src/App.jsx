import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormularioTarea from "./components/FormularioTarea";
import { Container } from "react-bootstrap";
import ListaTareas from "./components/ListaTareas";

function App() {
  return (
    <Container>
      <h1 className="display-3 text-center">Lista de Tareas</h1>
      <hr />
      <FormularioTarea />
      <ListaTareas></ListaTareas>
      <footer className="mt-auto text-center">Alvaro Molina Ailan</footer>
    </Container>
  );
}

export default App;
