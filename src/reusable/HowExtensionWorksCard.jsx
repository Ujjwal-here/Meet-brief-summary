import {HiCheckCircle} from "react-icons/hi2"
import "./HowExtensionWorksCard.css"

export function HowExtensionWorksCard({heading, paraOne, paraTwo, pic}) {
    return (
        <>
            <section className="extension-card-main">
                <div className="extension-card-main-div">
                    <img className="extension-card-main-div-img" src={pic} alt="Meeting"/>
                </div>
                <div className="extension-card-main-div-two">
                    <h1 className="extension-card-main-div-two-h1">{heading}</h1>
                    <div className="extension-card-main-div-two-div">
                        <HiCheckCircle className="extension-card-main-div-two-div-icons"/>
                        <span className="extension-card-main-div-two-div-p">{paraOne}</span>
                    </div>
                    <div className="extension-card-main-div-two-div">
                        <HiCheckCircle className="extension-card-main-div-two-div-icons"/>
                        <span className="extension-card-main-div-two-div-p">{paraTwo}</span>
                    </div>
                </div>

            </section>
        </>
    )
}