import "./Navbar.css"
import {FaHome, FaMeetup} from "react-icons/fa"
import {RiLoginCircleFill} from "react-icons/ri"
import {FcAbout} from "react-icons/fc"
import {TiContacts} from "react-icons/ti"

function Navbar() {
    return <nav className="nav">
        <div className="brand">
            <h1 className="brand-heading">Meet-Brief</h1>
            <p className="brand-quote">Transform your Life with Just a Click</p>
        </div>
        <div className="nav-items">
            <ul className="nav-elements">
                <li className="nav-element active">
                    <FaHome/>
                    <span>Home</span>
                </li>
                <li className="nav-element">
                    <FaMeetup/>
                    <span>Meetings</span>
                </li>
                <li className="nav-element">
                    <FcAbout/>
                    <span>About</span>
                </li>
                <li className="nav-element">
                    <TiContacts/>
                    <span>Contact</span>
                </li>

            </ul>
        </div>
        <div className="auth">
            <RiLoginCircleFill/>
            <span>Login</span>
        </div>
    </nav>
}

export default Navbar