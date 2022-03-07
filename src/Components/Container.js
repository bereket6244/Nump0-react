import React, {useState} from "react";
import './Container.css'
import Game from "./Game";
import History from "./History";
import Track from "./Track";


function Container(){

  let ranNum = []
  function generateRandomNumber(){
    ranNum[0] = (Math.floor(Math.random() * 10)).toString()
    while(ranNum [0] === "0"){
    ranNum[0] = (Math.floor(Math.random() * 10)).toString()
    }
    ranNum[1] = (Math.floor(Math.random() * 10)).toString()
    while(ranNum[1] === ranNum[0]){
    ranNum[1] = (Math.floor(Math.random() * 10)).toString()
    }
    ranNum[2] = (Math.floor(Math.random() * 10)).toString()
    while(ranNum[2] === ranNum [0] || ranNum[2] === ranNum[1]){
    ranNum[2] = (Math.floor(Math.random() * 10)).toString()
    }
    ranNum[3] = (Math.floor(Math.random() * 10)).toString()
    while(ranNum[3] === ranNum[0]||ranNum[3] === ranNum[1]||ranNum[3] === ranNum[2]){
    ranNum[3] = (Math.floor(Math.random() * 10)).toString()
    }   
}

generateRandomNumber()

const [tyial, setTrial] = useState(0)
const [hist, setHist] = useState([])

    return(
        <div className="container">
            <History tries = {tyial} hist = {hist}/>
            <Game ranNum = {ranNum} setTrial = {setTrial} setHist = {setHist} />
            <Track/>
        </div>
    )
}

export default Container