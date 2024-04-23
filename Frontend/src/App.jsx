import './App.css'
import Todo from './Component/Todo';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './Pages/Profile';
import Navbar from './Component/Navbar';

function App() {

  return (
    // <div>
    //     <div className="heading border-2 border-white text-xl text-bold font-serif p-1 rounded-md bg-orange-500 text-center">Todo Application</div>
    //     <div className="todoContainer border-2 border-white m-2 p-1 bg-gray-200">
    //       <Todo />
    //     </div>
    // </div>

    <>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </>
  )
}

export default App
