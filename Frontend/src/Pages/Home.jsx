import { Route, Routes } from "react-router-dom";
import CreateTodo from "../Component/CreateTodo";
import Navbar from "../Component/Navbar";
import Alltasks from "./Alltasks";
import Profile from "./Profile";

const Home = () => {
    return (
        <div className="home-container fixed inset-0 flex min-h-screen bg-violet-400 p-8">
            <div className="todo-container border-4 border-white rounded-lg fixed inset-0 m-5 ml-20 mr-20 flex bg-white">
                <Navbar />
                <div className="border-2 border-l-0 border-white rounded-r-lg w-full bg-violet-400 p-20 pt-10 pb-10">
                    <Routes>
                        <Route path="/" element={<CreateTodo/>} /> 
                        <Route path="/alltask" element={<Alltasks/>} />
                        <Route path="/setting" element={<Profile/>} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Home;