import { useForm } from "react-hook-form";
import {Tasks} from "../Tasks/Tasks";
/*import {tasksReducers,initialState} from "../../reducers/tasks";*/
/*import { useReducer } from "react";*/
/*import { SET_TASK, DELETE_TASK } from "../../actions/tasks";*/

const TasksAdd = ({addtask}) => {
    
    const { register, handleSubmit, formState: { errors } } = useForm({ reValidateMode: "onSubmit" }); 
    
    const agregarTarea= (task) => {
        console.log("Se dispara el onsubmit");

        addtask(task);

    };

    return (  
        <form onSubmit={handleSubmit(agregarTarea)}>
            <h1>Loco</h1>
            <label>
                Nombre de la Tarea:
                <input {...register("nombre", { required: true ,  minLength: 2})} placeholder="Nombre de la Tarea..." />
            
            </label>

            {errors && errors.nombre && errors.nombre.type === 'required'? <h1>El Nombre es requerido</h1>:''}
            {errors && errors.nombre && errors.nombre.type === 'minLength'? <h1>El minimo del Nombre es de 2 caracteres</h1>:''}

            <br></br>
            <label>
                Descripcion de la Tarea:
                <input {...register("descripcion", { required: true,  minLength: 2 })} placeholder="Descripcion de la tarea...." />            
            </label>

            {errors && errors.descripcion && errors.descripcion.type === 'required'? <h1>La Descripcion es requerido</h1>:''}
            {errors && errors.descripcion && errors.descripcion.type === 'minLength'? <h1>El minimo de Descripcion es de 2 caracteres</h1>:''}

            <br></br>
            <label>
                Prioridad de la Tarea:
                <input  {...register("prioridad")} placeholder="Prioridad de la tarea...." />
            </label>
            <br></br>

            <label>
                ID de la Tarea:
                <input {...register("idTarea")} placeholder="ID de la Tarea...." />
            </label>

            <br></br>

            <button type="submit" name="grabar">Agregar tarea</button>
        </form>

    );
}

export default TasksAdd;