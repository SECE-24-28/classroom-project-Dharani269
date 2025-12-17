import {useState, useMemo} from "react";
const slowFunction=(num)=>{
    console.log("calling slow function");
    for(let i=0;i<=1000000000;i++);
    return num*2;
};

const UseMemo =()=>{
    const [number, setNumber]=useState(0);
    const [theme,setTheme]=useState(true);
    const styling={
        backgroundColor:theme?"black":"white",
        color:theme?"white":"black"
    };
    const doubleNumber = useMemo(()=>
        slowFunction(number), [number]);
    
    return(
        <div style={styling}>
            <h2>Usememo Example</h2>
            <input type="number" value={number} onChange={(e)=>setNumber(parseInt(e.target.value) || 0)} />
            <button onClick={()=>setNumber(number+1)}>+</button><br></br>
             <h3>Number is {doubleNumber}</h3>
            <button onClick={()=>setTheme(!theme)}>Toggle Theme</button>
        
        </div>
    );
}
export default UseMemo;