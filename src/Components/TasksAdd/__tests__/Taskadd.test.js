import { render, fireEvent } from "@testing-library/react";
import TasksAdd from "../TasksAdd";

// test("caso de prueba")
// describe y test son funciones de jest (react-scripts)

describe("TasksAdd", () => {
  test("on mount should render Taks", () => {
    
    const { getByText, getByPlaceholderText} = render(<TasksAdd />);
    getByText("Loco");
    getByPlaceholderText(/Nombre de la Tarea.../i);
    getByPlaceholderText(/Descripcion de la tarea..../i);
    getByPlaceholderText(/Prioridad de la tarea..../i);
    getByPlaceholderText(/ID de la Tarea..../i);
    
  });

  /*
  test("+1 Button on click should increment with the assigned interval (1)", () => {
    const {getByRole } = render(<TasksAdd />);
    fireEvent.click(getByRole("button", { name: "grabar" }));
  });
  */
});
