import { Link } from 'react-router-dom';
import State from './State.jsx';
import Props from './props.jsx';
import UseState from './Hooks/UseState.jsx';
import UseEffect from './Hooks/UseEffect.jsx';
import UseEffectAPI from './Hooks/UseEffectAPI.jsx';
import UseRef from './Hooks/UseRef.jsx';
import FakeImageAPI from './Hooks/FakeImageAPI.jsx';
import UseMemo from './Hooks/UseMemo.jsx';

const LearningReact = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/learning-react">Learning React</Link></li>
                </ul>
            </nav>
            <h1>Learning React</h1>
            <p>This page is all about Learning React</p>
                 
            <hr />
            
            <h2>Props Example</h2>
            <Props hi="Hello SECE!!" grade="12th" age={18} img="\vite.svg" />
        

            <hr />
            <h2>State Management</h2>
            <State />
    
            <hr />
              
                <h2>Hooks</h2>
                <ul>
                    <li><UseState/></li>
                    <li><UseEffect/></li>
                    <li><UseEffectAPI/></li>
                    <li><UseRef/></li>
                    <li><FakeImageAPI/></li>
                    <li><UseMemo/></li>
                </ul>
        </div>
    )
}
export default LearningReact;