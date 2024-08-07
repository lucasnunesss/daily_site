/* eslint-disable no-unused-vars */
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
          }]
        }
    }
    case("UPDATE"):{
      console.log("act",action.ind)
      return {...state, tasks: state.tasks.map((data, index) => data.id === action.id ? {...data, task:  action.title === "" ? data.task : action.title} : data)}
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

  const addTask = (value) => {
    // setTasks((prevTasks) => [...prevTasks, value]);  // Adiciona a nova tarefa
 
    dispatch({
        type: "ADD",
        tasks: value,
    })
  }


  const editTask = (task, newTitle) => {
    dispatch({
      type: "UPDATE",
      id: task,
      title: newTitle,
   
    })

  }
  return {tasks, addTask, editTask }
}

export {TaskContextProvider, useTask}