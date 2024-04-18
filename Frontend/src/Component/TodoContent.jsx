import { useState } from "react";

const TodoContent = ({ todo, update}) => {
    console.log("Testing");

    const handleDelete = async (title) => {
        try {
            update(prevTodo => prevTodo.filter(todo => todo.title != title));  //after deletion, updating the todo data    

            const response = await fetch("http://localhost:3000/todo/delete", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title })

            })

            if(!response.ok){
                throw new Error("Failed to delete todo");
            }
        }
        catch (error) {
            console.error('Error deleting todo:', error);
        }
    }

    return (
        <div>
            {todo.map((info) => {
                return <div className="border-2 border-black p-2 m-2">
                    <h2><span className="font-semibold">Title : </span>{info.title}</h2>
                    <h2><span className="font-semibold">Description : </span>{info.description}</h2>
                    <button className="bg-green-400 p-1 pl-2 pr-2 m-1 rounded-md hover:bg-green-500 font-semibold">{info.completed == true ? "Completed" : "Complete"}</button>
                    <button className="bg-orange-400 p-1 pl-2 pr-2 m-1 rounded-md hover:bg-orange-500 font-semibold">Edit</button>
                    <button className="bg-red-400 p-1 pl-2 pr-2 m-1 rounded-md hover:bg-red-500 font-semibold" onClick={() => handleDelete(info.title)}>Delete</button>
                </div>
            })}
        </div>
    )
}

export default TodoContent;