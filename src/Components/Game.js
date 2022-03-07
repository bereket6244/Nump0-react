import React, { useState, useEffect} from "react";
import Preview from "./Preview";
import './Game.css'
import NumPad from "./NumPad";

function Game({ranNum, setTrial, setHist}) {

    useEffect(() => {
        document.addEventListener('keypress', handleKeyPress)
        // return () =>document.removeEventListener('keypress')
    })

    function handleKeyPress(e) {
        if (e.key === "Enter") {
            submitGuess()
            return
        }
    
        if (e.key === "Backspace" || e.key === "Delete") {
            deleteKey()
            return
        }
    
        if (e.key.match(/^[0-9]/)){
            pressKey(e.key)
            return
        }
    
        if (e.key === "h" || e.key === "H"){
            pressHistory()
            return
        }
        if (e.key === "b" || e.key === "B") {
            pressBack()
            return
        }
    }

    
        const [amountTried, setAmountTried] = useState(0)
        let n = 0
        let p = 0
        
        const [num, setNum] = useState([])
        const [numh, setNumh] = useState([])
        
        function addItem(e){
            setNum([...num, e])
        }

        function removeItem(){
            var numb = [...num]
            if (numb.length < 4){
                numb.splice(numb.length - 1, 1);
            }
            else {
                numb.splice(3, 1)
            }
              setNum(numb)
            }
        
        function checkNumPo(){
            if (num[0] !== ""  && num[1] !== "" && num[2] !== "" && num[3] !== ""){
                for (let j = 0; j <= 3; j++){
                    for (let i = 0; i <= 3; i++) {
                        if (num[j] === ranNum[i]){
                            n++
                            if(j === i){
                            p++
                            }
                        }
                    }
                }
            }

        }

        

        function handleMouseClick(e){
            if (e.target.matches("[data-enter]")){
            submitGuess()
            return
        }
        if (e.target.matches("[data-delete]")){
            deleteKey()
            return
        }
        if (e.target.matches("[data-key]")){
            pressKey(e.target.dataset.key)
            return
        }  
        if (e.target.matches("[data-history]")){
            pressHistory()
            return
        }
        if(e.target.matches("[data-back]")){
            pressBack()
            return
        }
    }

    function submitGuess(){
        
        if (num[0] === num[1] || num[0] === num[2] || num[0] === num[3] ||
            num[1] === num[2] || num[1] === num[3] ||
            num[2] === num[3]){
                if (num[0] === "" || num[1] === "" || num[2] === "" || num[3]){
                    alert("input all fields")
                }
                else{
                    alert("you cant input the same fields")
                }
            }
        if ( num[0] === "" && num[1] === "" && num[2] === "" && num[3]){
            alert("all fields are empty")
        }
        
        else if (num[0] !== num[1] && num[0] !== num[2] && num[0] !== num[3] &&
            num[1] !== num[2] && num[1] !== num[3] &&
            num[2] !== num[3]){
            
            // console.log(ranNum)
            checkNumPo()
            setNumh([num[0], num[1], num[2], num[3], n, p])
            setHist([...num, n, p])
            setNum([])
            n = 0
            p = 0
            setAmountTried((prev)=> prev +1 )
            
            // console.log(hist)
            setTrial(amountTried)
            // console.log(amountTried)
        }
       
    }

    function deleteKey(){
        removeItem()
    }

    function pressKey(e){
        addItem(e)
    }

    function pressHistory(){
        console.log("his")
    }
    
    function pressBack(){
        console.log("back")
    }

    return(
        <div className="game">
            <Preview num = {num} numh ={numh}/>
            <NumPad onPress = {handleMouseClick}/>
        </div>
    )
}

export default Game