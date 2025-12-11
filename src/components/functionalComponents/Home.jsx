import { Link } from 'react-router-dom';

const Home = () => {
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
        </div>
    )
}   
export default Home;