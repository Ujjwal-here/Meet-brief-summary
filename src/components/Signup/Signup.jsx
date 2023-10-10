import SignupImage from "../../assets/signup.svg"
import {Auth} from "../Auth";

export function Signup() {
    return (
        <>
            <Auth btn_name="Signup" p="Enter an Email and choose a password to setup your Account" link_to="/login"
                  image={SignupImage}
                  option_title="Already have an Account?" option_btn="Login"/>
        </>
    )
}