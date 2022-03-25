import React from 'react'

type Player = "X" | "O" | 'BOTH' | null

const Square = ({ value, onClick, winner }: {
    winner: Player
    value: Player
    onClick: () => void
}) => {

    if (!value) {
        return <button className='square' disabled={Boolean(winner)} onClick={onClick} />
    }
    return (
        <button className={`square square_${value.toLowerCase()}`} disabled>
            {value}
        </button>

    )
}

export default Square