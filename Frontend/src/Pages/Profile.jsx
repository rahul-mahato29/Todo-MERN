const Profile = () => {
    return (
        <div className="h-full bg-white rounded-2xl p-4 text-gray-600 font-semibold">
            <div>
                <div className="border-b-2 border-violet-400 m-1 flex text-violet-400 font-bold">
                    <div className="m-1 ml-0">Profile</div>
                </div>
                <div>
                    <div className="m-2 ml-0 flex justify-between">
                        <div className="m-1">Edit Profile</div>
                        <div className="m-1 cursor-pointer hover:text-violet-400">≫</div>
                    </div>
                    <div className="m-2 ml-0 flex justify-between">
                    <div className="m-1">Change Password</div>
                    <div className="m-1 cursor-pointer hover:text-violet-400">≫</div>
                    </div>
                    <div className="m-2 ml-0 flex justify-between">
                        <div className="m-1">Privacy</div>
                        <div className="m-1 cursor-pointer hover:text-violet-400">≫</div>
                    </div>
                </div>
            </div>
            <div>
                <div className="border-b-2 border-violet-400 m-1 flex text-violet-400 font-bold">
                    <div className="m-1 ml-0">Notification</div>
                </div>
                        <div className="m-2 ml-0 flex justify-between">
                            <div className="m-1">Notification</div>
                            <div className="m-1 cursor-pointer hover:text-violet-400">≫</div>
                        </div>
                        <div className="m-2 ml-0 flex justify-between">
                            <div className="m-1">Task Notification</div>
                            <div className="m-1 cursor-pointer hover:text-violet-400">≫</div>
                        </div>
            </div>
            <div>
                <div className="border-b-2 border-violet-400 m-1 flex text-violet-400 font-bold">
                    <div className="m-1">More</div>
                </div>
                <div>
                    <div className="m-2 ml-0 flex justify-between">
                        <div className="m-1">Language</div>
                        <div className="m-1 cursor-pointer hover:text-violet-400">≫</div>
                    </div>
                    <div className="m-2 ml-0 flex justify-between">
                        <div className="m-1">Country</div>
                        <div className="m-1 cursor-pointer hover:text-violet-400">≫</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;