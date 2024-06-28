export default function GameStatus({winner, winnerName, currentPlayerName}) {
    // 0 : draw, 1 : player1 wins, 2 : player2 wins, null : game is still running
    return (
        <div className="text-center text-2xl font-bold">
            {winner === 0 && 'Draw!'}
            {winner === 1 && `${winnerName} wins!`}
            {winner === 2 && `${winnerName} wins!`}
            {winner === null && `${currentPlayerName}'s turn`}
        </div>
    )
}