import {useState,useCallback} from "react";
const UseCallback = () => {
    const [number,setNumber]=useState(0);
     const [theme, toggleTheme]=useState(true);
     const styling = {
        backgroundColor: theme ? "black" : "white",
        color: theme ? "white" : "black",
     }
    var numList=useCallback((mul)=>{
       return[number + mul * 2,number + mul*3,number + mul*4];
    },[number]);
    return(
        <div style={styling}>
               <button onClick={()=>toggleTheme(!theme)}>Toggle Theme</button>
            <p>Use Callback Hook</p>
           
            <input type="number" value={number}  onChange={(e)=>{setNumber(parseInt(e.target.value))}}/>
               
            <p>The number type in the textbox is {number}</p>
            {numList(10).map((num,ind)=>{
                return <h6 key={ind}>The multiplied number according to your multiplication is {num}</h6>
            }
            )}
       
         
        </div>
    )
}
export default UseCallback;