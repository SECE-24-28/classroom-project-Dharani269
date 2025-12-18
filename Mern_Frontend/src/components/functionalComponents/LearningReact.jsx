import State from './State.jsx';
import Props from './props.jsx';
import UseState from './Hooks/UseState.jsx';
import UseEffect from './Hooks/UseEffect.jsx';
import UseEffectAPI from './Hooks/UseEffectAPI.jsx';
import UseRef from './Hooks/UseRef.jsx';
import UseMemo from './UseMemo.jsx';
import FakeImageAPI from './Hooks/FakeImageAPI.jsx';
import UseCallback from './Hooks/UseCallback.jsx';
const LearningReact = () => {
   
    return (
        <div>
            <h1>Learning React</h1>
            <p>This page is all about Learning React</p>
                 
            <hr />
            
            <h2>Props Example</h2>
            <Props hi="Hello Venishaa!!" grade="12th" age={18} img="\vite.svg" />
        

            <hr />
            <h2>State Management</h2>
            <State />
    
            <hr />
              
                <h2>Hooks</h2>
                
            <li><UseState/></li><hr />                          
            <li><UseEffect/></li><hr />
            <li><UseEffectAPI/></li> <hr />
            <li><FakeImageAPI/></li> <hr />
            <li><UseRef/></li> <hr />
            <li><UseMemo/></li><hr />
            <li><UseCallback/></li><hr />
           
        </div>
    )
}
export default LearningReact;