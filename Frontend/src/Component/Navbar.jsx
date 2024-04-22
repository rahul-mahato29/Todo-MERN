const Navbar = () => {
    return (
        <nav className="border-2 border-r-0 border-white rounded-l-lg w-96 bg-gray-100">
            <div className="flex flex-col justify-between space-y-6 p-4 text-center">
                <div className="border-b-2 border-violet-400 h-24 flex p-4">
                    <div className="flex justify-center items-center">
                        <div className="profile-pics mr-1 bg-violet-400 p-3 rounded-md text-md font-semibold cursor-pointer">photo</div>
                        <div className="user-name text-violet-400 text-xl font-bold cursor-pointer">Rahul Mahato</div>
                    </div>
                </div>
                <div className="p-1 h-40">
                    <div className="p-1 flex flex-row gap-x-5">
                        <div className="text-lg font-semibold text-gray-500 cursor-pointer">📅</div>
                        <div className="text-lg font-semibold text-gray-500 cursor-pointer">Today Tasks</div>
                    </div>
                    <div className="ml-11">
                        <div className="flex gap-2 mb-2">
                            <div className="font-semibold text-gray-500 cursor-pointer">🟠</div>
                            <div className="text-md font-semibold cursor-pointer text-gray-500">Personal</div>
                        </div>
                        <div className=" flex gap-2 mb-2">
                            <div className="font-semibold text-gray-500 cursor-pointer">🟡</div>
                            <div className="text-md font-semibold cursor-pointer text-gray-500">Freelance</div>
                        </div>
                        <div className="flex gap-2 mb-2">
                            <div className="font-semibold text-gray-500 cursor-pointer">🟣</div>
                            <div className="text-md font-semibold cursor-pointer text-gray-500">Work</div>
                        </div>
                        <div className="flex gap-2">
                            <div className="text-sm font-semibold text-gray-500 cursor-pointer">➕</div>
                            <div className="text-md font-semibold text-gray-400 cursor-pointer">Add Filter</div>
                        </div>
                    </div>
                </div>
                <div className="p-1 flex flex-row gap-x-5">
                    <div className="text-lg font-semibold text-gray-500 cursor-pointer">📑</div>
                    <div className="text-lg font-semibold text-gray-500 cursor-pointer">Scheduled Tasks</div>
                </div>
                <div className="p-1 flex flex-row gap-x-5">
                    <div className="text-lg font-semibold text-gray-500 cursor-pointer">⚙️</div>
                    <div className="text-lg font-semibold text-gray-500 cursor-pointer">Settings</div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;