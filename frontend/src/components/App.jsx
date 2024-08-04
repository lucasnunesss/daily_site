import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import InputTask from './inputTask/InputTask'
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/myTasks' element={<InputTask />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App