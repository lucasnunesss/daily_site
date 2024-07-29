/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState, useRef } from 'react'
import { redirect, useNavigate } from "react-router-dom";
import './App.css'
import Load from './Load'
import styled from 'styled-components';
import Horarios from './components/Horarios';
import { TaskContextProvider, useTask } from './context/TaskContext';


export const ButtonElement = styled.button`
  
  border: none;
  background-color: ${(props) => props.inputColor || "#BF4F74"};
  color: white;
  font-size: 1.2em;
  font-weight: 700;
  cursor: pointer;

  &:hover{
   border: 1px solid black;
  }
`

const SpanAdd = styled.span`
  grid-row: 3;
  cursor: pointer;
  display: inline;
  grid-column: 2;
  background-color: blue;
`

const IconElement = styled.i`

  grid-column: 1;
  cursor: pointer;
  width: 10%;
  font-size: 1.5em;
  font-weight: 700;
  position: relative;
  top: 60%;
`

const TasksDiv = styled.div`
  display: flex;
  flex-direction: column;
  

`

const TaskFlow = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  padding: 10px;
  margin: 10px;
    font-weight: 700;
    
  .span-time{
    grid-column: 1;
  }
`

function AddTask() {
  const [tarefas, setTarefas] = useState({tarefa: "", hora: ""})
  const {tasks, addTask} = useTask()
  const navigate = useNavigate()
  useEffect(() => {
    fetch('/app')
    .then(res => res.json())
    .then(data => (data))
  })

  async function funcBtn(e){
    e.preventDefault()
  
    const dados = new FormData();
    const serializedTasks = JSON.stringify(tasks);
    dados.append('tasks', serializedTasks);

    const dados2 = Object.fromEntries(dados);
    const resposta = await fetch("/app", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados2)
    }).then((data) => (data))
    navigate("/load")
   

  }
  console.log("tasks", tasks)
  return (
    <>
    
        <form onSubmit={funcBtn} >
          
          <div className='formRoutine'>
       
            <IconElement className="bi bi-plus-lg"></IconElement>
            <h1>Compromisso</h1>
            <Horarios onChange={e => setTarefas({...tarefas, tarefa: e.target.value})} selectTime={e => setTarefas({...tarefas, hora: e.target.value})} />
            <ButtonElement type='
            button' onClick={(e) => addTask(e,tarefas)} inputColor="transparent">Salvar</ ButtonElement>
          
         
            <Tasks />
            
          </div>
          <button type='submit'>Enviar</button>
        </form>
    
    </>
  )
}

function Tasks(){
  const {tasks,editTask} = useTask()

  const [editIndex, setEditIndex] = useState(null);
  const [tarefas, setTarefas] = useState({tarefa: "", hora: ""})
  const refTeste = useRef()
  function refFuncText(e, index){
    refTeste.current = e.id
 
    setEditIndex(index)
   
    console.log(refTeste.current)
  }

  function handleSave(index) {
    console.log(refTeste)
    editTask(refTeste.current, index)
    setEditIndex(null);
  }
  return (
    <>

<TasksDiv>
      {tasks.tasks.map((data, index) => (
        <TaskFlow key={index}>
          {editIndex === index ? (
            <>
              <Horarios
                onChange={(e) => setTarefas({ ...tarefas, tarefa: e.target.value })}
                selectTime={(e) => setTarefas({ ...tarefas, hora: e.target.value })}
              />
              <button onClick={(e) => handleSave(tarefas)}>Send</button>
            </>
          ) : (
            <>
              <input
                className="span-time"
                readOnly
                value={data.hora}
                onClick={() => refFuncText(data, index)}
              />
              <input
                className="span-task"
                readOnly
                value={data.task}
                onClick={() => refFuncText(data, index)}
              
                
              />
            </>
          )}
        </TaskFlow>
      ))}
    </TasksDiv>
    
  
    </>
  )
}

export default AddTask
