const TodoContent = ({ todo }) => {
    console.log("Testing");
    return (
        <div>
            {todo.map((info) => {
                return <div className="border-2 border-black p-2 m-2">
                    <h2><span className="font-semibold">Title : </span>{info.title}</h2>
                    <h2><span className="font-semibold">Description : </span>{info.description}</h2>
                    <button className="bg-gray-400 pl-1 pr-1 mt-1 rounded-md hover:bg-gray-500">{info.completed == true ? "Completed" : "Complete"}</button>
                </div>
            })}
        </div>
    )
}

export default TodoContent;