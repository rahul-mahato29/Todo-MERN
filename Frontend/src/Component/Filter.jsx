const Filter = ({icon, filterName}) => {
    return (
        <div className="flex gap-2 mb-2">
            <div className="font-semibold text-gray-500 cursor-pointer">{icon}</div>
            <div className="text-md font-semibold cursor-pointer text-gray-500">{filterName}</div>
        </div>
    )
}

export default Filter;