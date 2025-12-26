import { useState } from "react";

const State = () => {
    const [state,updateState] = useState( "State Component");
    const SetState = () => {
        updateState("Updated Component");
    }
    return(
        <div>
            <p>This is a {state} </p>
            <button onClick={SetState}> Update</button>
        </div>
    )
}
export default State;