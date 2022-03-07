import React from 'react'

function NumPad({onPress}) {
        
    return (
        <div className='keyboard'>

            <div className='span-3'>
            <button className='key' onClick={onPress} data-history>HISTORY</button>
            <button className='key' onClick={onPress} data-track>TRACK</button>
            </div>
            <button className='key' id='one' onClick={onPress} data-key={"1"}>1</button>
            <button className='key' id='two' onClick={onPress} data-key={"2"}>2</button>
            <button className='key' id='three' onClick={onPress} data-key={"3"}>3</button>
            <button className='key' id='four' onClick={onPress} data-key={"4"}>4</button>
            <button className='key' id='five' onClick={onPress} data-key={"5"}>5</button>
            <button className='key' id='six' onClick={onPress} data-key={"6"}>6</button>
            <button className='key' id='seven'  onClick={onPress} data-key={"7"}>7</button>
            <button className='key' id='eight'  onClick={onPress} data-key={"8"}>8</button>
            <button className='key' id='nine' onClick={onPress} data-key={"9"}>9</button>
            <button className='key' id='del' onClick={onPress} data-delete >D</button>
            <button className='key' id='zero' onClick={onPress} data-key={"0"} >0</button>
            <button className='key' id='ent' onClick={onPress} data-enter>E</button>
        </div>
    )
}

export default NumPad