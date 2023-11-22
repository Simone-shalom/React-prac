import React, { useState } from 'react';

const Game =() => {

    const options = ['crikcet', 'football', 'baskeball']
    const days = ['monday', 'friday', 'sunday']
    
    const [item, setItem] = useState('')
    const [day, setDay] = useState('')

    const onItem = (e) => {
        setItem(e.target.value)
    }

    const onDay = (e) => {
        setDay(e.target.value)
    }


    return (
        <div className='flex flex-col items-center justify-center space-y-2 pt-10'>
            <h2>Play a Game
            </h2>
            <div className='flex space-x-3'>
                <Button array={options} value={item} onChange={onItem}/>
                <Button array={days} value={day} onChange={onDay}/>
            </div>

        </div>
    )
}

export default Game

export const Button =({array, value, onChange}) => {

    return (
        <div className='flex space-x-2 '>
            <select 
                className='border border-black rounded-lg  px-2' 
                value={value} onChange={onChange} >
              {array.map((item) => (
                <option key={item} value={item}>
                    {item}
                </option>
            ))}
            </select>
        </div>
    )
}

