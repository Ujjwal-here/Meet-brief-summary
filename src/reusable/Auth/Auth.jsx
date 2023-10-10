import "./Auth.css"
import {Link} from "react-router-dom";

export function Auth({btn_name, image, option_btn, option_title, p, link_to}) {
    return (
        <>
            <section className="auth-main">
                <div className="auth-main-div">
                    <div className="auth-main-div-div">
                        <h1 className="auth-main-div-div-h1">{btn_name} <span className="auth-main-div-div-h1-span">with us Today</span>
                        </h1>
                        <p className="auth-main-div-div-p">{p}</p>
                        <form className="auth-main-div-div-form" id="auth-form" method="post">
                            <div className="auth-main-div-div-form-div">
                                <label className="auth-main-div-div-form-div-label" htmlFor="Email">Username:</label>
                                <input className="auth-main-div-div-form-div-input" placeholder="Email" type="text"
                                       id="email" name="email"
                                       required/>
                            </div>

                            <div className="auth-main-div-div-form-div">
                                <label className="auth-main-div-div-form-div-label"
                                       htmlFor="password">Password:</label>
                                <input className="auth-main-div-div-form-div-input" placeholder="Password"
                                       type="password" id="password"
                                       name="password"
                                       required/>
                            </div>

                            <button className="auth-main-div-div-form-btn" type="submit">{btn_name}</button>
                            <div className="auth-main-div-div-form-two">
                                <p className="auth-main-div-div-form-two-p-one">{option_title}</p>
                                <Link to={`${link_to}`}>
                                    <p className="auth-main-div-div-form-two-p-two">{option_btn}</p>
                                </Link>

                            </div>
                        </form>
                    </div>
                </div>
                <div className="auth-main-div-two">
                    <img className="auth-main-div-two-img" src={image} alt="auth"/>
                </div>
            </section>
        </>
    )
}