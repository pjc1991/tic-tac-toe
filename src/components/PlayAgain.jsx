export default function PlayAgain (winner, onPlayAgain){
    return (
        <div className="text-center">
            {winner !== null && <button
                className="bg-orange-600 border-2 border-black text-white rounded-lg px-2 py-1 mt-4"
                onClick={() => {
                    onPlayAgain([]);
                }}
            >
                Play Again
            </button>}
        </div>
    )
}