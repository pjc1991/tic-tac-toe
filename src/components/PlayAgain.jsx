export default function (){
    return (
        <div className="text-center">
            {winner !== null && <button
                className="bg-orange-600 border-2 border-black text-white rounded-lg px-2 py-1 mt-4"
                onClick={() => {
                    setGameLog([]);
                }}
            >
                Play Again
            </button>}
        </div>
    )
}