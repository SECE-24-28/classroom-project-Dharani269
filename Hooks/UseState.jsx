import { useState } from 'react'
const UseState =()=>{
const [number,updateNumber] = useState(0);
const [text,updateText] = useState("")

    const subTract = ()=>{
        updateNumber(number-1);
    }
    const addiTion =()=>{
        updateNumber(number+1);
    }
    const reSet =()=>{
        updateNumber(0);
        updateText(""); 
    }


    return (
        <div>
            <h1>This is useState Hook example</h1>
            <button onClick={subTract}>-</button>
            <input type="number" value ={number}/>
            <button onMouseEnter={addiTion}>+</button>
            <button onDoubleClick={reSet}>Reset</button>
            <br/>
            <h2> Text typing</h2>
            <input type="text" value={text} onChange={(e)=>updateText(e.target.value)}></input>
            <button onDoubleClick={reSet}>Reset</button>
            </div>
        
    )
}
export default UseState;