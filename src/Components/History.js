import React, {useState} from "react";
import './History.css'
let his = []
function History({tries, hist}) {
    his.push(...hist)
    // Array.prototype.push.apply(his, hist)

    if (his[6] !== ""){
        for (let k = 6; k <= 6*tries; k= k+6) {
           his.splice(k, 6)
        }
    }
console.log(tries)
console.log(his)

    return (
        <div className="history">
            <div id="board-container">
      {Array.from({length: 6 * tries}).map((_, i) =>{
          for (let k = 4; k < 400; k= k+6) {
            if (k === i|| k+1 === i){
                return <div className="guessed square estimated" key={i}>{his[i]}</div>
            }
            else {
              return<div className="guessed square" key={i}>{his[i]}</div>
            }
              
          }
          
          
      })}          
                
            </div>
            <div className="h-buttons">
                <button className="game-btn width-full" data-game>GAME</button>
                <button className="track-btn width-full" data-track>TRACK</button>
            </div>
        </div>
    )
}

export default History