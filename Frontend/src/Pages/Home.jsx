import CreateTodo from "../Component/CreateTodo";
import Navbar from "../Component/Navbar";

const Home = () => {
    return (
        <div className="home-container fixed inset-0 flex min-h-screen bg-violet-400 p-8">
            <div className="todo-container border-4 border-white rounded-lg fixed inset-0 m-5 ml-20 mr-20 flex bg-white">
                <Navbar />
                <div className="border-2 border-l-0 border-white rounded-r-lg w-full bg-violet-400 p-20 pt-10 pb-10">
                    <CreateTodo />
                </div>
            </div>
        </div>
    )
}

export default Home;