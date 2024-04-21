import { useState } from "react";

const TodoContent = ({ todo, update }) => {

    const [editClick, setEditClick] = useState(false);

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

            if (!response.ok) {
                throw new Error("Failed to delete todo");
            }
        }
        catch (error) {
            console.error('Error deleting todo:', error);

            //revert UI change on deletion failure
            update(prevTodo => [...prevTodo]);
            alert("Failed to delete todo. Please try again.");
        }
    }

    return (
        <div>
            {todo.map((info) => {
            {editClick ? console.log("YES") : console.log("NO")}
                if(editClick){
                    return <div className="border-2 border-black p-2 m-2 w-64">
                    <h2><span className="font-semibold">Title : </span>{info.title}</h2>
                    {/* <input type="text" className="text" value={editTitle} onChange={(e) => handleEditedTitle(e.target.value)} /> */}
                    <h2><span className="font-semibold">Description : </span>{info.description}</h2>
                    {/* <textarea cols="23" rows="2" value={editDescription} onChange={(e) => handleEditedDesc(e.target.value)}></textarea> */}
                    <button className="bg-green-400 p-1 pl-2 pr-2 m-1 rounded-md hover:bg-green-500 font-semibold" onClick={handleUpdateTodo}>Update</button>
                    </div>
                }
                else{
                    return <div className="border-2 border-black p-2 m-2 w-64">
                    <h2><span className="font-semibold">Title : </span>{info.title}</h2>
                    <h2><span className="font-semibold">Description : </span>{info.description}</h2>
                    <button className="bg-orange-400 p-1 pl-2 pr-2 m-1 rounded-md hover:bg-orange-500 font-semibold" onClick={() => setEditClick(true)}>Edit</button>
                    <button className="bg-red-400 p-1 pl-2 pr-2 m-1 rounded-md hover:bg-red-500 font-semibold" onClick={() => handleDelete(info.title)}>Delete</button>
                </div>
                }
            })}
        </div>
    )
}

export default TodoContent;