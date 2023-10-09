import "./Navbar.css"
import {TbBrandMeetup, TbHome2} from "react-icons/tb"
import {RiLoginCircleFill} from "react-icons/ri"
import {MdOutlineFeaturedPlayList} from "react-icons/md"
import {TiContacts} from "react-icons/ti"

function Navbar() {
    return <nav className="navbar">
        <div className="navbar_div">
            <h1 className="navbar_div_h1">Meet-Brief</h1>
            <p className="navbar_div_p">Transform your Life with Just a Click</p>
        </div>
        <div className="navbar_div_two">
            <ul className="navbar_div_two_ul">
                <li className="navbar_div_two_ul_li active">
                    <TbHome2 className="navbar_div_two_ul_li_icons"/>
                    <span className="navbar_div_two_ul_li_span">Home</span>
                </li>
                <li className="navbar_div_two_ul_li">
                    <TbBrandMeetup className="navbar_div_two_ul_li_icons"/>
                    <span className="navbar_div_two_ul_li_span">Meetings</span>
                </li>
                <li className="navbar_div_two_ul_li">
                    <MdOutlineFeaturedPlayList className="navbar_div_two_ul_li_icons"/>
                    <span className="navbar_div_two_ul_li_span">About</span>
                </li>
                <li className="navbar_div_two_ul_li">
                    <TiContacts className="navbar_div_two_ul_li_icons"/>
                    <span className="navbar_div_two_ul_li_span">Contact</span>
                </li>

            </ul>
        </div>
        <div className="navbar_div_three">
            <span className="navbar_div_two_three_span">Login</span>
            <RiLoginCircleFill className="navbar_div_two_three_icons"/>
        </div>
    </nav>
}

export default Navbar