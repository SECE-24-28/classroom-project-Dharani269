import { Link } from 'react-router-dom';
import State from './State.jsx';
import Props from './props.jsx';

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
            <h2>State Management</h2>
            <State />
            
            <hr />
            <h2>Props Example</h2>
            <Props 
                hi="Hello from Props!" 
                grade="12th" 
                age={18} 
                img="\vite.svg" 
            />
        </div>
    )
}
export default LearningReact;