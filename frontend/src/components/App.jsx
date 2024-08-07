import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import InputTask from './inputTask/InputTask'
import { TaskContextProvider } from './context/TaskContext'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <TaskContextProvider>
      <Routes>

        <Route path='/myTasks' element={<InputTask />}></Route>
      </Routes>
      </TaskContextProvider>
      <Routes>
      <Route path='/home' element={<Home />}></Route>
      </Routes>
     
    </BrowserRouter>
    </>
  )
}
export default App