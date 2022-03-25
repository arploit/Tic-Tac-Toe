import React, { useState, useEffect } from 'react'
import Square from '../../components/Square/Square'

//type
type Player = "X" | "O" | 'BOTH' | null



const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>(Math.round(Math.random() * 1) === 1 ? "X" : "O")
    const [winner, setWinner] = useState<Player>(null)

    const setSquareValue = (index: number) => {
        const newData = squares.map((value, idx) => {
            if (index === idx) return currentPlayer
            return value
        });
        setSquares(newData);
        setCurrentPlayer(currentPlayer === "X" ? 'O' : "X")
    }

    const reset = () => {
        setSquares(Array(9).fill(null))
        setWinner(null)
        setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? "X" : "O")
    }

    const calculateWinner = (squares: Player[]) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    useEffect(() => {
        const w = calculateWinner(squares)
        if (w) {
            setWinner(w)
        }
        if (!w && !squares.filter((squares) => !squares).length) {
            setWinner("BOTH")
        }
    })

    return (
        <div>
            {!winner && <p>Hey {currentPlayer}, it&apos;s your turn</p>}
            {winner && winner !== "BOTH" && <p>Congratulations {winner}</p>}
            {winner && winner === "BOTH" && (
                <p>Congratulations you&apos;re both winners</p>
            )}
            <div className='grid'>
                {Array(9).fill(null).map((_, idx) => {
                    return (
                        <Square key={idx}
                            winner={winner}
                            onClick={() => setSquareValue(idx)}
                            value={squares[idx]}
                        />
                    )
                })}
            </div>
            <button className='reset' onClick={reset}>RESET</button>

        </div>
    )
}

export default Board