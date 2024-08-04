import { useState } from "react"
import Container from "../../styles/Container"
import TaskContainer from "../../styles/TaskContainer"

const InputTask = () => {
  const [showInput, setShowInput] = useState(false)
  return (
    <>
      <Container>
        <h1>Tarefas</h1>

        <button onClick={() => setShowInput(true)}>Adicionar Novas Tarefas</button>
          {showInput ? (
            <>
            <input type="text" placeholder="Nova Tarefa" />
            <button onClick={() => setShowInput(false)}>Enviar</button>
            </>
          ) : null}
        <TaskContainer>

        </TaskContainer>

      </Container>
    </>
  )
}

export default InputTask