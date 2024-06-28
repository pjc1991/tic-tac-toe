const initialGameBoard = [[null, null, null], [null, null, null], [null, null, null]];

export default function GameBoard({gameLog = [], onChecked}) {

    const gameBoard = [...initialGameBoard.map((row) => [...row])];

    gameLog.forEach((log) => {
        gameBoard[log.move.row][log.move.column] = log.player;
    });

    return (
        <>
            {gameBoard.map((row, rowIndex) =>
                (row.map((column, columnIndex) =>
                    (
            <div key={`${rowIndex}-${columnIndex}`}
                className="bg-orange-600 rounded-lg flex items-center justify-center text-white text-4xl cursor-pointer w-36 h-36"
                onClick={() => onChecked(rowIndex, columnIndex)}>
                {column === 1 ? 'X' : column === 2 ? 'O' : ''}
            </div>
                    )
                ))
            )}
        </>
    )
}