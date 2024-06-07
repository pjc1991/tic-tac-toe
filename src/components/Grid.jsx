export default function Grid({ occupied = null, onChecked}) {
    return (
        <div className="bg-orange-600 h-52 w-52 rounded-lg flex items-center justify-center text-white text-4xl cursor-pointer"
        onClick={() => onChecked()}
        >
            {occupied}
        </div>
    )
}