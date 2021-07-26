import { render, fireEvent } from "@testing-library/react";
import Tasks from "../../Tasks";


describe("Tasks", () => {    
    test('Agrega una Tarea u verifica si anda', () => {
        const {utils, getByText, getByPlaceholderText} = render(<Tasks />)
        const inputNombre = getByPlaceholderText("Nombre de la Tarea...");
        fireEvent.change(inputNombre, {target: {value: 'Planchar'}});
        
        const inputDescripcion = getByPlaceholderText("Descripcion de la tarea....");
        fireEvent.change(inputDescripcion, {target: {value: 'Planchar las camisas'}});

        /*fireEvent.click(getByRole("button", { name: "grabar" }));*/
        fireEvent.click(getByText(/Agregar tarea/i))

        setTimeout(()=> {getByText("Planchar")},2000)
        });
/*
      });
*/    
  });