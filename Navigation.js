import '../assets/styles/Navigation.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import H from './Home';
import SignUp from './signup';
import LogIn from './login';
function Home(params)
{
    return(
        <div>
            <H/>
            
        </div>
    )
}
function Pets(params)
{
    return(
        <div>
            <h1>PETS PAGE</h1>
           
        </div>
    )
}
function Signup(params)
{
    return(
        <div>
            <SignUp/>
            
        </div>
    )
}
function Login(params)
{
    return(
        <div>
            <LogIn/>
           
        </div>
    )
}
function Navbar(params)
{
    return(
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to = "/home" className='link'>Home</Link>
                    </li>
                    <li>
                        <Link to = "/pets" className='link'>Pets</Link>
                    </li>
                    <li>
                        <Link to = "/signup" className='link'>Signup</Link>
                    </li>
                    <li>
                        <Link to = "/login" className='link'>Login</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route exact path = '/home' element = {<Home/>}/>
                <Route exact path = '/pets' element = {<Pets/>}/>
                <Route exact path = '/signup' element = {<Signup/>}/>
                <Route exact path = '/login' element = {<Login/>}/>
            </Routes>
        </Router>
    )
}
export default Navbar;


/*import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Home'
import Pets from './Pets'
import Login from './login';
import  Signup from './signup';


function Navbar(params)
{
    return(
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to = "/Home" className='link'>Home</Link>
                    </li>
                    <li>
                        <Link to = "/pets" className='link'>Pets</Link>
                    </li>
                    <li>
                        <Link to = "/signup" className='link'>Signup</Link>
                    </li>
                    <li>
                        <Link to = "/login" className='link'>Login</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route exact path = '/pets' element = {<Home/>}/>
                <Route exact path = '/pets' element = {<Pets/>}/>
                <Route exact path = '/signup' element = {<Signup/>}/>
                <Route exact path = '/login' element = {<Login/>}/>
            </Routes>
        </Router>
    )
}
export default Navbar;*/
