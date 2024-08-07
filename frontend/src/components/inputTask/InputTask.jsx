import { useRef, useState } from "react"
import Container from "../../styles/Container"
import TaskContainer from "../../styles/TaskContainer"
import { useTask } from "../context/TaskContext"
const InputTask = () => {
  const [showInput, setShowInput] = useState(false)
  const [taskLocal, setTaskLocal] = useState()
  const [editIndex, setEditIndex] = useState(null);
  const {tasks, addTask, editTask} = useTask()
  const refIdTask = useRef();

  function refFuncText(e, index){
    refIdTask.current = e
    setEditIndex(index)

  }

  const handleSave = () => {
    
    console.log("novo id", tasks)
    editTask(refIdTask, taskLocal)

  }
 
  const newTask = (e, data, index) => {
    setTaskLocal(e.target.value)
    refFuncText(data, index)
    setEditIndex(index)
  }


  const sendBackend = () => {
    addTask(taskLocal)
    setShowInput(false)
  }

  return (
    <>
      <Container>
        <h1>Tarefas</h1>

        <button onClick={() => setShowInput(true)}>Adicionar Novas Tarefas</button>
          {showInput ? (
            <>
            <input type="text" onChange={e => setTaskLocal(e.target.value)} placeholder="Nova Tarefa" />
            <button onClick={() => sendBackend()}>Enviar</button>
            </>
          ) : null}
        <TaskContainer>
            {tasks ? (
              
              tasks.tasks.map((data, index) => (
                
                editIndex === index ? (
                  <div className="task_name" key={data.id}>{data.task} <button onClick={() => setEditIndex(null)} >Editar</button> </div>
                ) : (
                  <>
                  <input   onChange={e => newTask(e, data.id, index)}/>
                  <button onClick={() => handleSave()}>Enviar de novo</button>
                  </>
                )
            
              ))
            ) : <h1>Sem Tarefas</h1>}
        </TaskContainer>

      </Container>
    </>
  )
}

export default InputTask