import { useState } from "react";

const TodoContent = ({ todo }) => {
    console.log("Testing");

    return (
        <div>
            {todo.map((info) => {
                return <div className="border-2 border-black p-2 m-2">
                    <h2><span className="font-semibold">Title : </span>{info.title}</h2>
                    <h2><span className="font-semibold">Description : </span>{info.description}</h2>
                    <button className="bg-gray-400 pl-1 pr-1 mt-1 rounded-md hover:bg-gray-500">{info.completed == true ? "Completed" : "Complete"}</button>
                    <button className="bg-gray-400 p-1 pl-2 pr-2 m-1 rounded-md hover:bg-gray-500 font-semibold">Edit</button>
                    <button className="bg-gray-400 p-1 pl-2 pr-2 m-1 rounded-md hover:bg-gray-500 font-semibold">Delete</button>
                </div>
            })}
        </div>
    )
}

export default TodoContent;