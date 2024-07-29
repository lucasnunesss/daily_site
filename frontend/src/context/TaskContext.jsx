/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

const TaskContext = createContext()



const INITIALSTATE = {
  tasks: [
    
  ]
};

const reduce = (state, action) => {

  switch(action.type){
    case("ADD"):{
        return {
          ...state,
          tasks: [...state.tasks,{
            
            id: state.tasks.length + 1,
            task: action.tasks,
            hora: action.hora
          }]
        }
    }
    default:
      return state;
  }
  
}

const TaskContextProvider = ({children}) => {
  const [tasks, dispatch] = useReducer(reduce, INITIALSTATE)

  return (
    <TaskContext.Provider value={{tasks, dispatch}}>
      {children}
    </TaskContext.Provider>
  )
}
const useTask = () => {
  const {tasks, dispatch} = useContext(TaskContext)

  const addTask = (e, value) => {
    // setTasks((prevTasks) => [...prevTasks, value]);  // Adiciona a nova tarefa
    e.preventDefault()
    dispatch({
        type: "ADD",
        tasks: value.tarefa,
        hora: value.hora
    })
  }

  return {tasks, addTask }
}

export {TaskContextProvider, useTask}