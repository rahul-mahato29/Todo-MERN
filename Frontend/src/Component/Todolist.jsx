import axios from 'axios';

const Todolist = ({ icon, task, time }) => {
    console.log("I am in TodoList")


    // If task is not an array, convert it to an array for easier handling, because we are mapping upon the array.
    const tasksArray = Array.isArray(task) ? task : [task];

    async function handleCheck(task) {
        console.log(task);
        //deleting the task
        try {
            const response = await axios.post("http://localhost:3000/todo/delete", {
                title: task
            })
            console.log(response);
            if (!response.ok) {
                throw new Error("Failed to delete todo");
            }
        }
        catch (error) {
            console.error("Error : ", error);
        }
    }

    return (
        <div>
            {tasksArray.map((info) => {
                return (
                    <div className="bg-white flex justify-between p-3 ml-4 mr-4 rounded-lg mb-3">
                        <div>
                            <span className="text-sm m-1 ml-2">{icon}</span>
                            <span className="text-md font-semibold text-gray-500 ml-1">{info}</span>
                        </div>
                        <div>
                            <span className="text-md font-semibold cursor-pointer mr-6">{time}</span>
                            <input className="text-xl h-4 w-4 cursor-pointer mr-4" type="checkbox" onClick={() => handleCheck(info)} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Todolist;