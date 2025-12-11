import { Link } from 'react-router-dom';

const About = () => {
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
            <h1>About</h1>
            <p>This is About Page</p>
            <hr />
            <p>We are CYS Department Learining MERN Stack</p>
        </div>
    )
}   
export default About;