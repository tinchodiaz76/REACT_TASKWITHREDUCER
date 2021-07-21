import {SET_TASK, DELETE_TASK,GET_TASK, UPDATE_TASK} from "../actions/tasks";

export const initialState = {
    tasks: []
    /*selectedTask: {},*/
    /*owner: {},*/
  };
  

export const  tasksReducers = (state, action) => {
    switch (action.type) {
        case GET_TASK: {
          const selectedTask = state.tasks.find(
            (task) => task.id === action.payload.id
          );
          return {
            ...state,
            selectedTask,
          };
        }
    
        case DELETE_TASK: {
          const tasks = state.tasks.filter((task) => task.idTarea !== action.payload.idTarea);

          return {
            ...state,
            tasks,
          };
        }

        //El reducer es una una funcion pura
        //EL reducer no muta dato, y siempre debe devolver algo
    // {action: SET_TASK, payload : {task : {id, name, description}}
        case SET_TASK: {

          return {
            ...state,
            tasks: [...state.tasks,action.payload.task],
            };
        }

        case UPDATE_TASK: {
          console.log("action.payload.task.idTarea=",action.payload.task.idTarea);

          const tasks = state.tasks.filter((task) => task.idTarea !== action.payload.task.idTarea);

          console.log("tasks=",tasks);

          return {
            ...state,
            tasks: [...tasks,action.payload.task],
            };
        }


        default:
            return state;
        }
    
};
