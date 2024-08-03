/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState, useRef } from 'react'
import { redirect, useNavigate } from "react-router-dom";
import './App.css'
import Load from './Load'
import styled from 'styled-components';
import Horarios from './components/Horarios';
import { TaskContextProvider, useTask } from './context/TaskContext';
import { InputElement, SelectElement } from './components/Horarios';

export const ButtonElement = styled.button`
  grid-row: 2;
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
            <Horarios onChange={e => {setTarefas({...tarefas, tarefa: e.target.value})}} selectTime={e => setTarefas({...tarefas, hora: e.target.value})} />
            <ButtonElement type='
            button' onClick={(e) => addTask(e,tarefas)} inputColor="transparent">Salvar</ ButtonElement>
          
         
      
            
          </div>
          <div>
            <Tasks />
            <button type='submit'>Enviar</button>
          </div>
        </form>
    
    </>
  )
}

function Tasks(){
  const {tasks,editTask} = useTask()

  const [editIndex, setEditIndex] = useState(null);
  const [tarefas, setTarefas] = useState({tarefa: "", hora: ""})
  const refTeste = useRef()
  const refTask = useRef()
  const refHora = useRef()
  function refFuncText(e, index){
    refTeste.current = e.id
    console.log("tar", tarefas)
    setEditIndex(index)
   

  }

  function handleSave() {
    
    editTask(refTeste.current, refTask.current, refHora.current)
    setEditIndex(null);
  }

  function savesave(e){
    console.log("aaaa", e.currentTarget.children.hora.value)
    refTask.current = e.currentTarget.children.compromisso.value
    refHora.current = e.currentTarget.children.hora.value
    editTask(refTeste.current, refTask.current, refHora.current)
  }

  function save2(e){
    console.log("me ajuda", e)
    if (e === undefined) return console.log("maoi")
    refHora.current = e
  }

  console.log("tarafaafsfas",tarefas)
  return (
    <>

<TasksDiv>
      {tasks.tasks.map((data, index) => (
        <TaskFlow key={index} onClick={e => savesave(e)}>
     
          {editIndex === index ? (
        
        <>
              <Horarios
                onChange={(e) => {setTarefas({ ...tarefas, tarefa: e.target.value })}}
                selectTime={(e) => {setTarefas({ ...tarefas, hora: e.target.value })}}
                value={data.task} valueTime={data.hora}
              />

              <ButtonElement onClick={(e) => handleSave()}  inputColor="transparent">Send</ButtonElement>
              </>
           
          ) : (
            <>
      
      <input
                className="span-time"
                readOnly
              
                value={data.hora}
                onClick={(e) => refFuncText(data, index)}
              />
              <input
                className="span-task"
                readOnly
              
                value={data.task}
                onClick={(e) => refFuncText(data, index)}
              
                
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
