import './App.css'
import Todo from './Component/Todo';

function App() {

  return (
    <div>
        <div className="heading border-2 border-white text-xl text-bold font-serif p-1 rounded-md bg-orange-500 text-center">Todo Application</div>
        <div className="todoContainer border-2 border-white m-2 p-1 bg-gray-200">
          <Todo />
        </div>
    </div>
  )
}

export default App
