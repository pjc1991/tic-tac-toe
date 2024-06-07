import {useState} from 'react'
import Player from "./components/Player.jsx";
import Grid from "./components/Grid.jsx";

function App() {

    const [player1, setPlayer1] = useState('Player 1');
    const [player2, setPlayer2] = useState('Player 2');
    const [currentPlayer, setCurrentPlayer] = useState(1);
    const [gameBoard, setGameBoard] = useState(Array(9).fill(null));
    const [winner, setWinner] = useState(null);

    function handleCheck(index) {
        if (winner) {
            return;
        }

        let newGameBoard = [...gameBoard];

        if (newGameBoard[index] === null) {
            newGameBoard[index] = currentPlayer === 1 ? 'X' : 'O';
            setGameBoard(newGameBoard);
            setCurrentPlayer(() => currentPlayer === 1 ? 2 : 1);
        }

        if (checkWinner(newGameBoard)) {
            const winnerName = currentPlayer === 1 ? player1 : player2;
            setWinner(winnerName);
        }
    }

    function checkWinner(newGameBoard) {
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let combo of winningCombos) {
            const [a, b, c] = combo;

            if (newGameBoard[a] && newGameBoard[a] === newGameBoard[b] && newGameBoard[a] === newGameBoard[c]) {
                return newGameBoard[a];
            }
        }

        return null;
    }

    return (
        <>
            <main className="bg-black w-1/2 mx-auto p-4 rounded-lg mt-4">
                <h1>Let&#39;s play Tic-Tac-Toe!</h1>
                <hr className="border-2 border-orange-600 mt-2"/>
                <header className="mt-4">
                    <ul className="grid grid-cols-2 gap-4 justify-items-center">
                       <Player name={player1} symbol="X" onEdit={(name) => setPlayer1(name)}/>
                       <Player name={player2} symbol="O" onEdit={(name) => setPlayer2(name)}/>
                    </ul>
                </header>
                <hr className="border-2 border-orange-600 mt-4"/>
                <section>
                    <h2 className="text-center mt-4">
                        Game Board
                    </h2>
                    <div id="game-board" className="grid grid-cols-3 mt-4 justify-items-center gap-4">
                        {gameBoard.map((occupied, index) => (
                            <Grid key={index} occupied={occupied} onChecked={() => handleCheck(index)}/>
                        ))}
                    </div>
                </section>
                <hr className="border-2 border-orange-600 mt-4"/>
                <section>
                    <h2 className="text-center mt-4">
                        {winner ? `${winner} wins!` : `Current Player: Player ${currentPlayer}`}
                    </h2>
                    <div className="text-center">
                        {winner && <button
                            className="bg-orange-600 border-2 border-black text-white rounded-lg px-2 py-1 mt-4"
                            onClick={() => {
                                setGameBoard(Array(9).fill(null));
                                setWinner(null);
                                setCurrentPlayer(1);
                            }}
                        >
                            Play Again
                        </button>}
                    </div>
                </section>
            </main>
        </>
    )
}

export default App
