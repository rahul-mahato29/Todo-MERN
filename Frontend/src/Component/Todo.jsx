import { useEffect, useState } from "react";
import TodoContent from "./TodoContent";

//Todo Component
const Todo = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    //updating the database with todo details
    function submitDetails(){
        //invalid input
        if(!title || !description){
            alert("Please Provide both title and description");
            return;
        }

        //use can also use "axios", its syntax is little easy
        fetch("http://localhost:3000/todo/create", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                description: description
            }), 
            headers: {
                "content-Type": "application/json"
            }
        })
        .then(async function(res){
            const json = await res.json();
            alert("Todo Added");
        })
    }


    const [todo, setTodo] = useState([]);
    //connecting with backend (Reading all the todos from database)
    useEffect(() => {
        fetch("http://localhost:3000/todo/read").then(
            async function(res){
                const jsonData = await res.json();
                setTodo(jsonData.Todo);
            }
        )
        console.log("running")
    }, [])  //if the second parameter of useEffect is empty, means it will only render trigger the logic inside it once.

    return (
        <div>
            <div className="flex justify-center">
                <form action="" className="border-2 border-black p-3">
                    <lable className="font-semibold">Task : </lable>
                    <input type="text" name="title" onChange={(e) => setTitle(e.target.value)}></input><br /><br />
                    <lable className="font-semibold">Description : </lable>
                    <input type="text" name="description" onChange={(e) => setDescription(e.target.value)}></input><br />
                    <button className="bg-gray-400 p-1 pl-2 pr-2 m-1 rounded-md hover:bg-gray-500 font-semibold" onClick={submitDetails}>Submit</button>
                </form>
            </div>

            <div className="flex justify-center">
                <TodoContent todo = {todo} update={setTodo} />
            </div>
        </div>
    );
}

export default Todo;