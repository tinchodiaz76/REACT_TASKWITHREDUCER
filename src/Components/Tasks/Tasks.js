import {tasksReducers,initialState} from "../../reducers/tasks";
import { useReducer } from "react";
import { SET_TASK, DELETE_TASK, UPDATE_TASK} from "../../actions/tasks";
import TasksAdd from "../TasksAdd/TasksAdd";
import TasksList from "../TasksList/TasksList";

const Tasks = () => {
    const [state, dispatch]= useReducer(tasksReducers, initialState);

    const addtask = (data) => {
        console.log("En addtask ", data);

        dispatch({
            type: SET_TASK,
            payload: {task :data}
        })

    };
    
    const deletetask = (id) => {
        console.log("En deletetask id= ", id);

        dispatch({
            type: DELETE_TASK,
            payload: {idTarea: id}
        })

    };

    const updatetask=(data)=>{
        console.log("Deletetask id= ", data.idTarea);

        dispatch({
            type: UPDATE_TASK,
            payload: {task: data}
        })

    }

    return (
        <>
            <TasksAdd addtask={addtask} />
            <TasksList tasks={state.tasks} deletetask={deletetask} updatetask={updatetask}/>
        </>
    );

}

export default Tasks;