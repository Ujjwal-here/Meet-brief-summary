import "./Navbar.css"

function Navbar() {
    return <nav className="nav">
        <div className="brand">
            <h1 className="brand-heading">Meet-Brief</h1>
            <p className="brand-quote">Transform your Life with Just a Click</p>
        </div>
        <div className="nav-items">
            <ul className="nav-elements">
                <li className="nav-element">Home</li>
                <li className="nav-element">About</li>
                <li className="nav-element">Blog</li>
                <li className="nav-element">Career</li>
            </ul>
        </div>
    </nav>
}

export default Navbar