const Todolist = ({icon, task, time}) => {
    return (
        <div className="bg-white flex justify-between p-3 ml-4 mr-4 rounded-lg mb-3">
            <div>
                <span className="text-sm m-1 ml-2">{icon}</span>
                <span className="text-md font-semibold text-gray-500 ml-1">{task}</span>
            </div>
            <div>
                <span className="text-md font-semibold cursor-pointer mr-6">{time}</span>
                <input className="text-xl h-4 w-4 cursor-pointer mr-4" type="checkbox" />
            </div>
        </div>
    )
}

export default Todolist;