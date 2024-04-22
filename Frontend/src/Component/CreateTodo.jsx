const CreateTodo = () => {
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
                        <input type="text" className="p-1 w-96 outline-none" placeholder="What is your next task ?" />
                    </div>
                    <div className="mr-4">
                        <span className="text-xl mr-2 cursor-pointer">🕑</span>
                        <span className="text-xl mr-1 cursor-pointer">✅</span>
                    </div>
                </div>
            </div>
            <div className="mt-10 p-1">
                <div className="bg-white flex justify-between p-3 ml-4 mr-4 rounded-lg mb-3">
                    <div>
                        <span className="text-sm m-1 ml-2">🟡</span>
                        <span className="text-md font-semibold text-gray-500 ml-1">Work Out</span>
                    </div>
                    <div>
                        <span className="text-md font-semibold cursor-pointer mr-6">8:00 am</span>
                        <input className="text-xl h-4 w-4 cursor-pointer mr-4" type="checkbox" />
                    </div>
                </div>
                <div className="bg-white flex justify-between p-3 ml-4 mr-4 rounded-lg mb-3">
                    <div>
                        <span className="text-sm m-1 ml-2">🟠</span>
                        <span className="text-md font-semibold text-gray-500 ml-1">Design team meeting</span>
                    </div>
                    <div>
                        <span className="text-md font-semibold cursor-pointer mr-6">2:30 pm</span>
                        <input className="text-xl h-4 w-4 cursor-pointer mr-4" type="checkbox" />
                    </div>
                </div>
                <div className="bg-white flex justify-between p-3 ml-4 mr-4 rounded-lg mb-3">
                    <div>
                        <span className="text-sm m-1 ml-2">🟢</span>
                        <span className="text-md font-semibold text-gray-500 ml-1">Hand Off the project</span>
                    </div>
                    <div>
                        <span className="text-md font-semibold cursor-pointer mr-6">7:00 pm</span>
                        <input className="text-xl h-4 w-4 cursor-pointer mr-4" type="checkbox" />
                    </div>
                </div>
                <div className="bg-white flex justify-between p-3 ml-4 mr-4 rounded-lg mb-3">
                    <div>
                        <span className="text-sm m-1 ml-2">🟣</span>
                        <span className="text-md font-semibold text-gray-500 ml-1">Create Todo Application</span>
                    </div>
                    <div>
                        <span className="text-md font-semibold cursor-pointer mr-6">10:30 pm</span>
                        <input className="text-xl h-4 w-4 cursor-pointer mr-4" type="checkbox" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTodo;