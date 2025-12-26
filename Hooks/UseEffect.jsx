import { useState } from 'react';
import { useEffect } from 'react';
const UseEffect =()=>{
  var [text,updateText]=useState("")
  useEffect(()=>{console.log(text)},[text])
    return(
        <div>
        <h1>This is the Effect Hook</h1>
        <input type= "text" value={text} onChange={(e)=>updateText(e.target.value)}/>
        </div>
    );
};
export default UseEffect;