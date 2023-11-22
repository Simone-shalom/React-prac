import React, { useState } from 'react';

const Checkboxes = () => {

    const [array, setArray] = useState(['Play cricket', 'play vi9deo games', 'go gym'])

    const onDelete = (name) => {
      const filteredArray = array.filter((arr) => arr !== name)
      setArray(filteredArray)
    }

    console.log(array)

    return (
        <div className='flex flex-col items-center justify-center text-lg pt-10 space-y-5'>
            Select and add boxes
            <div className='flex flex-col space-y-3'>
                {array.map((arr) => (
                    <Box key={arr} arr={arr} onDelete={onDelete}/>
                ))}
            </div>

        </div>
    )
}

export default Checkboxes


export const Box = ({arr, onDelete}) => {

    const [active,setActive] = useState(false)
    
    const onActive =() => {
        setActive(!active)
    }

    return (
        <div className='flex space-x-3' key={arr}>
        <input type='checkbox' value={active.active} onChange={onActive}/>
        <h2>
            {arr}
        </h2>
        {active ? (
            <button
                onClick={()=> onDelete(arr)}
                className='border border-black rounded-md px-2 py-1 text-xs'>X</button>
        ): (
            <div>
            </div>
        )}
    </div>
    )
}

