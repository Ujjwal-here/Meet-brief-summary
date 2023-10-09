import Meet from "../meet.svg";
import './Introduction.css'
import Meet_Two from "../meet-two.svg"

export function Introduction() {
    return (
        <div className="introduction-main">
            <img className="introduction-main-img" src={Meet} alt="Remote Meeting"/>
            <div className="introduction-main-div">
                <h1 className="introduction-main-div-h1">Revolutionize Your Google Meet Experience with Real-time
                    Captions</h1>
                <p className="introduction-main-div-p">
                    Tired of struggling to keep up with meeting notes? Our
                    Chrome
                    extension revolutionizes the way you capture and summarize Google Meet conversations. Say
                    goodbye to manual note-taking and hello to instant, insightful summaries!
                </p>
                <button className="introduction-main-div-btn">Download Meet-Brief Now</button>
            </div>
            <img className="introduction-main-img-two" src={Meet_Two} alt="Remote Meeting"/>
        </div>
    )
}