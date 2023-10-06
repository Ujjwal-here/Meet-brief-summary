import './Home.css'
import MeetingPic from '../undraw_remote_meeting_re_abe7.svg'
import {KeyFeatures} from "./KeyFeatures";

export function Home() {
    return (
        <>
            <section className="home-s1-main">
                <div className="home-s1-main-div">
                    <div className="home-s1-main-div-div">
                        <p></p>
                        <h1 className="home-s1-main-div-div-h1">Revolutionize Your Google Meet Experience with Real-time
                            Captions</h1>
                        <p className="home-s1-main-div-div-p">Tired of struggling to keep up with meeting notes? Our
                            Chrome
                            extension revolutionizes the way you capture and summarize Google Meet conversations. Say
                            goodbye to manual note-taking and hello to instant, insightful summaries!</p>
                        <button className="home-s1-main-div-div-btn">Download Now</button>
                    </div>
                    <img className="home-s1-main-div-img" src={MeetingPic} alt="Remote Meeting"/>
                </div>
            </section>


            <section className="home-s2-main">
                <div className="container">
                    <h2 className="home-s2-main-h2">Key Features</h2>
                    <KeyFeatures/>
                </div>
            </section>


            <section className="home-s3-main">
                <div className="container">
                    <h2 className="home-s2-main-h2">How Extension Works</h2>
                    <KeyFeatures/>
                </div>
            </section>
        </>
    )
}