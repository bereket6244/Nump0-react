import React, { useState } from "react";
import Clr_btn from "./Clr_btn";
import './Track.css'

function Track() {
  return (
    <div className="track">
      <div className="color-pad">
      <Clr_btn>1</Clr_btn>
      <Clr_btn>2</Clr_btn>
      <Clr_btn>3</Clr_btn>
      <Clr_btn>4</Clr_btn>
      <Clr_btn>5</Clr_btn>
      <Clr_btn>6</Clr_btn>
      <Clr_btn>7</Clr_btn>
      <Clr_btn>8</Clr_btn>
      <Clr_btn>9</Clr_btn>
      <div></div>
      <Clr_btn>0</Clr_btn>
      <div></div>
      </div>
      <div className="t-buttons">
          <button className="game-btn width-full" data-game>GAME</button>
          <button className="history-btn width-full" data-history>HISTORTY</button>
        </div>
    </div>
  ) 
}

export default Track