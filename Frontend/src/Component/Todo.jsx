import { useState } from "react";
import TodoContent from "./TodoContent";

//Todo Component
const Todo = () => {
    const [todo, setTodo] = useState([]);

    //connecting with backend
    fetch("http://localhost:3000/todo/read").then(
        async function(res){
            const jsonData = await res.json();
            setTodo(jsonData.Todo);
        }
    )

    return (
        <div>
            <div className="flex justify-center">
                <form action="" className="border-2 border-black p-3">
                    <lable className="font-semibold">Title : </lable>
                    <input type="text" name="title"></input><br /><br />
                    <lable className="font-semibold">Description : </lable>
                    <input type="text" name="description"></input><br />
                    <button className="bg-gray-400 p-1 pl-2 pr-2 m-1 rounded-md hover:bg-gray-500 font-semibold">Submit</button>
                </form>

            </div>
            <div className="flex justify-center">
                <TodoContent todo = {todo} />
            </div>
        </div>
    );
}

export default Todo;