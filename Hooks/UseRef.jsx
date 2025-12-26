import { useEffect, useState, useRef } from 'react';

const UseRef = () => {
    var[text,setText] = useState("");
    var prevText = useRef();
    useEffect(() => {
        prevText.current = text;
    },[text]);  
    return (
        <div>
            <h3>This is UseRef Hook</h3>
            <input type="text" value={text} onChange={e=>setText(e.target.value)}/>
            <h4>The current render is {text}</h4>
            <h5> The Previous render is{prevText.current}</h5>
        </div>
    )
}
export default UseRef;