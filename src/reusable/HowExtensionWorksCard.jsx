import {HiCheckCircle} from "react-icons/hi2"
import "./HowExtensionWorksCard.css"

export function HowExtensionWorksCard({heading, paraOne, paraTwo}) {
    return (
        <>
            <section className="main">
                <h1 className="main-heading">{heading}</h1>
                <hr className="card-hr"/>
                <div className="main-div">
                    <HiCheckCircle className="icons"/>
                    <span className="main-para">{paraOne}</span>
                </div>
                <div className="main-div">
                    <HiCheckCircle className="icons"/>
                    <span className="main-para">{paraTwo}</span>
                </div>
            </section>
        </>
    )
}