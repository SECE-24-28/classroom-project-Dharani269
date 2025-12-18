const Props=(props)=>{
   return(
    <div>
        <p>This is Props component</p>
      <ol>
        <li>Props are:</li> 
        <ul>
            <li>{props.hi}</li>
            <li>I Completed my {props.grade} grade by the age of {props.age} years old</li>
            <li><img src={props.img} alt="image" /></li>
        </ul>
      </ol>
    </div>
   ) 
}
export default Props;