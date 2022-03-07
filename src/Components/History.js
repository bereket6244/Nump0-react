import React, {useState} from "react";
import './History.css'
let his = []
function History({tries, hist}) {

    console.log("this is b4 " + tries)

    if (tries === 0) {
        for (let k = 0; k <= 5   ; k++) {
                his[k] = hist[k] 
        }
    }

    else if (tries >= 1) {
        for (let f = tries*6; f <= (tries *12) - 1   ; f++) {
                his[f] = hist[f - (6*tries)]
        }
    }
    

    

console.log(his)

    return (
        <div className="history">
            <div id="board-container">
      {Array.from({length: 6 * (tries+1)}).map((_, i) =>{
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