import {Table, Button,Modal, InputGroup, FormControl} from "react-bootstrap";
import {Tasks} from "../Tasks/Tasks";
import {useState} from "react";

const TasksList = ({tasks,deletetask,updatetask}) => {
    /*
                    <td> <Button variant="danger" size="lg" onClick={() => handleShow(item)}>
                    Eliminar
                    </Button>
                </td>
    */            
   const[show, setShow] = useState(false);

    const [tarea,setTarea]= useState([]);

    const deleteTask = (idTarea) =>{
        console.log("deleteTask=",idTarea);
        deletetask(idTarea);
    }

    const updateTask = (tarea) =>{
        
       console.log("updateTask.idTarea=", tarea.idTarea);
       console.log("updateTask.nombre=",tarea.nombre);
       console.log("updateTask.descripcion=",tarea.descripcion);
       console.log("updateTask.prioridad=",tarea.prioridad);
       setShow(false);
        //console.log("updateTask, idTarea=", tarea.idTarea);
        updatetask(tarea);  //addtask(task);
    }

    const handleShow = (task) =>{
        console.log(task);
        setShow(true);
        setTarea(task)
    }

    const handleClose =() =>{
        setShow(false);
    }

    const onhandleinput =(e)=>{
            const prop = e.target.name;
            const value = e.target.value;
            console.log(prop);
            console.log(value );
            
            setTarea({
              ...tarea,
              [prop]: value,
            });
            
    };



               
    return (
        <div>
        <Table>
            <thead>
                <tr>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Prioridad</th>
                </tr>
            </thead>
            <tbody>
                {tasks?.length>0 && tasks.map((task) => 
                <tr key={task.idTarea}>
                <td>{task.nombre}</td>
                <td>{task.descripcion}</td>
                <td>{task.prioridad}</td>
                <td> <Button variant="danger" size="lg" onClick={() => deleteTask(task.idTarea)}>
                    Eliminar
                    </Button>
                </td>     
                <td> <Button variant="primary" size="lg" onClick={() => handleShow(task)}>
                    Editar
                    </Button>
                </td>                
                </tr>
                )}        
            </tbody>
        </Table>

        <Modal show={show} onHide={handleClose} tarea={tarea}>
                <Modal.Header>
                <Modal.Title>Tareas</Modal.Title>
                </Modal.Header>
                <Modal.Body>Desea Eliminar la tarea {tarea.nombre}?
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm" >Nombre</InputGroup.Text>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" name="nombre" defaultValue={tarea.nombre} onChange={onhandleinput}/>
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm">Descripcion</InputGroup.Text>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"  name="descripcion" defaultValue={tarea.descripcion} onChange={onhandleinput}/>
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm">Prioridad</InputGroup.Text>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" name="prioridad" defaultValue={tarea.prioridad} onChange={onhandleinput}/>
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm">IdTarea</InputGroup.Text>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" name="IdTarea" defaultValue={tarea.idTarea} onChange={onhandleinput}/>
                    </InputGroup>

                </Modal.Body>
                    
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={() => updateTask(tarea)}>
                    Grabar
                </Button>
                </Modal.Footer>
        </Modal>
        </div>
    );

}
 
export default TasksList;