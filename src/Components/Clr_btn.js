import React, { useState } from "react";


// the css for this is in the Track.css file
const colors = [
    "btn--normal",
    "btn--green",
    "btn--red",
    "btn--purple",
    "btn--third"
]
let checkButtonStyles = colors[0]
let n = 0 


function Clr_btn({children}) {
    let [counter, setCounter] = useState(1)
    const increament = () => {
            setCounter((prev) => prev + 1 )
            if (counter%5===0){
                n = counter/5
            }
            if (counter-5*n < 0){
                setCounter(5)
            }
            console.log('counter is ' + counter)
            console.log( counter - 5*n)
            checkButtonStyles = colors[counter - 5*n]      
    }

    return ( 
        <div>
                <button 
                    className={`key clr-btn ${checkButtonStyles}`} 
                    onClick= {increament}
                >
                {children}</button>
        </div>
    )
}

export default Clr_btn