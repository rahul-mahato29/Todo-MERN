import { useEffect, useState } from "react";
import Todolist from "./Todolist";
import axios from 'axios';

const CreateTodo = () => {

    const [taskAdd, setTaskAdd] = useState("");
    const [taskRead, setTaskRead] = useState([]);

    function submitDetails() {

        //invalid input
        if (!taskAdd) {
            alert("Please Enter Your Task!!");
            return;
        }

        //putting task into database
        axios.post("http://localhost:3000/todo/create", {
            title: taskAdd,
            description: 'Testing-Todo'
        })
            .then(function (response) {
                alert("Task Added");
            })
            .catch(function (error) {
                console.log("error : ", error);
            })
            
            //clearing the data - so that input field also get cleared
            setTaskAdd('');

    }

    //Retriving all the details from database
    useEffect(() => {
        axios.get("http://localhost:3000/todo/read")
            .then(function (response) {
                // console.log(response)
                setTaskRead(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [taskRead])

    return (
        <div className="h-full">
            <div>
                <div className="p-1">
                    <h2 className="text-2xl font-bold text-white">Today main focus</h2>
                    <h1 className="text-3xl font-bold text-white">Design team meeting</h1>
                </div>
                <div className="border-2 border-black bg-white flex justify-between p-2 rounded-lg mt-10">
                    <div>
                        <span className="text-sm m-1 ml-2">🔴🔵🟢</span>
                        <input type="text" name="task" className="p-1 w-96 outline-none" placeholder="What is your next task ?" value={taskAdd} onChange={(e) => setTaskAdd(e.target.value)} />
                    </div>
                    <div className="mr-4">
                        <span className="text-xl mr-2 cursor-pointer">🕑</span>
                        <span className="text-xl mr-1 cursor-pointer" onClick={submitDetails}>✅</span>
                    </div>
                </div>
            </div>

            <div className="mt-10 p-1">
                {taskRead.Todo && taskRead.Todo.map((txt, index) => (
                    <Todolist key={index} icon={"🟠"} task={txt.title} time={"2:30 pm"} />
                ))}
            </div>
        </div>
    )
}

export default CreateTodo;



// <Todolist icon={"🟡"} task={"Work Out"} time={"8:00 am"} />
// <Todolist icon={"🟠"} task={"Design team meeting"} time={"2:30 pm"} />
// <Todolist icon={"🟢"} task={"Hand Off the project"} time={"7:00 pm"} />
// <Todolist icon={"🟣"} task={"Create Todo Application"} time={"10:30 pm"} /> 