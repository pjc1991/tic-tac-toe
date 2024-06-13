import {useState} from 'react'
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import GameStatus from "./components/GameStatus.jsx";

function App() {

    const [player1, setPlayer1] = useState('Player 1');
    const [player2, setPlayer2] = useState('Player 2');
    const [gameLog, setGameLog] = useState([]);
    const winner = getWinner(gameLog);

    function getCurrentPlayer() {
        if (gameLog.length === 0) {
            return 1;
        }

        return gameLog[0].player === 1 ? 2 : 1;
    }

    function handleCheck(rowIndex, columnIndex) {
        const log = {
            player: getCurrentPlayer(),
            move: {
                row: rowIndex,
                column: columnIndex
            }
        }

        if (gameLog.some((item) => item.move.row === rowIndex && item.move.column === columnIndex)) {
            return;
        }

        const winner = getWinner(gameLog);

        if (winner) {
            return;
        }

        const newGameLog = [log, ...gameLog];
        setGameLog(newGameLog);
    }

    function getWinner(newGameLog){
        const winningPatterns = [
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            [[0, 0], [1, 1], [2, 2]],
            [[0, 2], [1, 1], [2, 0]]
        ];

        for (let i = 0; i < winningPatterns.length; i++) {
            const pattern = winningPatterns[i];
            const first = newGameLog.find((log) => log.move.row === pattern[0][0] && log.move.column === pattern[0][1]);
            const second = newGameLog.find((log) => log.move.row === pattern[1][0] && log.move.column === pattern[1][1]);
            const third = newGameLog.find((log) => log.move.row === pattern[2][0] && log.move.column === pattern[2][1]);

            if (first && first.player === second?.player && first.player === third?.player) {
                return first.player;
            }
        }

        if (newGameLog.length === 9) {
            return 0;
        }

        return null;
    }

    function getPlayerName(player) {
        switch (player) {
            case 1:
                return player1;
            case 2:
                return player2;
            default:
                return '';
        }
    }


    return (
        <>
            <main className="bg-black w-1/2 mx-auto p-4 rounded-lg mt-4 border-2 border-orange-600">
                <h1 className="text-center text-4xl text-white font-bold mb-4">
                    Let&#39;s play Tic-Tac-Toe!
                </h1>
                <hr className="border-2 border-orange-600 mt-2"/>
                <header className="mt-4">
                    <ul className="grid grid-cols-2 gap-4 justify-items-center">
                        <Player name={player1} symbol="X" onEdit={(name) => setPlayer1(name)}/>
                        <Player name={player2} symbol="O" onEdit={(name) => setPlayer2(name)}/>
                    </ul>
                </header>
                <hr className="border-2 border-orange-600 mt-4"/>
                <section>
                    <div id="game-board" className="grid grid-cols-3 mt-4 justify-items-center gap-4">
                        <GameBoard onChecked={handleCheck} gameLog={gameLog}/>
                    </div>
                </section>
                <hr className="border-2 border-orange-600 mt-4"/>
                <section>
                    <GameStatus
                        winner={winner}
                        winnerName={getPlayerName(winner)}
                        currentPlayerName={getPlayerName(getCurrentPlayer())}
                    />
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
                </section>
                <hr className="border-2 border-orange-600 mt-4"/>
                <section>
                    <h2 className="text-center mt-4">
                        Play log
                    </h2>
                    <ul className="text-center">
                        {gameLog.map((log, index) => (
                            <li key={index}>
                                {`${getPlayerName(log.player)} moved to ${log.move.row +1}, ${log.move.column +1}`}
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </>
    )
}

export default App
