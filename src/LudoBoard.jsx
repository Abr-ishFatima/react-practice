//practice

import { useState } from "react";

export default function Ludo(){
    let [moves, setMoves] = useState({blue :0, red:0, green:0, yellow:0});
    return (
        <div>
            <p>Game Begins!</p>
            <div className="board">
                <p>Blue Moves = {moves.blue}</p>
                <button style={{backgroundColor : "blue"}}>+1</button>
                <p>Yellow Moves = {moves.yellow}</p>
                <button style={{backgroundColor : "yellow"}}>+1</button>
                <p>Green Moves = {moves.green}</p>
                <button style={{backgroundColor : "green"}}>+1</button>
                <p>Red Moves = {moves.red}</p>
                <button style={{backgroundColor : "red"}}>+1</button>
            </div>
        </div>
    );
}