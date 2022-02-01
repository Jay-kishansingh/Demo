import { useState } from "react";
import './Counter.css'

function Counter(){

    const [increment, setIncrement] = useState(0);
    
    return(
        <div className="counter-container">
            <h1>{increment}</h1>
            <button className="btn btn-success my-4" onClick={()=> {setIncrement(increment+1)}}>Increment</button>
            <button className="btn btn-success my-4" onClick={()=> {setIncrement(increment-1)}}>Decrement</button>
        </div>
    )
}

export default Counter;