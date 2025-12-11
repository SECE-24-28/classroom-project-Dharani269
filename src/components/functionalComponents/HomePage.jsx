import { Link } from 'react-router-dom';

const HomePage = () => {
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
            <h1>Home Page</h1>
            <p>Welcome to the Home Page</p>
        </div>
    )
}
export default HomePage;