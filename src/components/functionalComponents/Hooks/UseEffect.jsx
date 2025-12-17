import { useState, useEffect } from "react";
const UseEffect = () => {
    var[text,updateText] =  useState("");
    useEffect(() => {console.log(text)},[text]);
    var[number,updateNumber] =  useState("");
    useEffect(() => {console.log(number)},[number]);
    return (
        <div>
        <h3>This is UseEffect Hook</h3>
        <p>Use Effect for Text</p>
        <input type="text" value={text} onChange={(e) => {updateText(e.target.value)}} />
        <br></br>
        <br></br>
        <p>Use Effect for Number</p>
        <input type="number" value={number} onChange={(e) => {updateNumber(e.target.value)}} />
        </div>
    );
};
export default UseEffect;