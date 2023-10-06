import {ReusableCardTwo} from "../reusable/ReusableCardTwo";
import './KeyFeatures.css'

export function KeyFeatures() {
    return (
        <div className="key-features">
            <ReusableCardTwo heading=" Real-time Caption Extraction"
                             para="Meet-Brief seamlessly extracts and displays captions during your Google Meet sessions."/>
            <ReusableCardTwo heading="Automated Summaries"
                             para="Instantly generate concise summaries of the meeting content, allowing users to grasp the key takeaways with ease and efficiency."/>
            <ReusableCardTwo heading="Interactive Question & Answer"
                             para="Enables users to ask questions related to the meeting content based on the summary, fostering engagement and facilitating deeper understanding."/>
            <ReusableCardTwo heading="User-Friendly Interface"
                             para="Offers an intuitive and easy-to-navigate interface, ensuring a seamless user experience for individuals of all tech proficiency levels."/>
        </div>

    )
}