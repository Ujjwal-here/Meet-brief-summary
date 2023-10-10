import {Auth} from "../../reusable/Auth/Auth";
import LoginImage from "../../assets/login.svg"

export function Login() {
    return (
        <Auth btn_name="Login" image={LoginImage} p="Please Login into your Meet-Brief Account" link_to="/signup"
              option_title="Don't have an Acount?" option_btn="Signup"/>
    )
}