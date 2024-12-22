import { useState } from 'react' ;

export default function State() {
    let [number , setnumber ]=useState(0) 

    const numberup = () => setnumber(number + 1)
    const numberdown = () => setnumber(number - 1)
    return (
        <>
                <button  onClick={numberup}>up</button>
                <button  onClick={numberdown}>down</button>
                <h2>{number}</h2>
        </>
    )

} ;