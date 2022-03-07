import React, {useState} from "react";

function Preview({num, numh}) {
    
    return (
        <div className="preview">
                <div className="guessed square" id="firsth">{numh[0]}</div>
                <div className="guessed square" id="secondh">{numh[1]}</div>
                <div className="guessed square" id="thirdh">{numh[2]}</div>
                <div className="guessed square" id="fourthh">{numh[3]}</div>
                <div className="estimated square" id="numberh">{numh[4]}</div>
                <div className="estimated square" id ="positionh">{numh[5]}</div>
                <div></div>
                <div className="guess square" id="first">{num[0]}</div>
                <div className="guess square" id="second">{num[1]}</div>
                <div className="guess square" id="third">{num[2]}</div>
                <div className="guess square" id="fourth">{num[3]}</div>
                <div></div>
        </div>
    )
}

export default Preview