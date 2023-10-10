import {KeyFeaturesCard} from "../../reusable/KeyFeaturesCard";
import './KeyFeatures.css'
import DataExtraction from "../../assets/data-extraction.svg"
import Summary from "../../assets/summary.svg"
import QA from "../../assets/Q&A.svg"
import Interface from "../../assets/interface.svg"

export function KeyFeatures() {
    return (
        <div className="key-features">
            <KeyFeaturesCard heading=" Real-time Caption Extraction"
                             para="Meet-Brief seamlessly extracts and displays captions during your Google Meet sessions."
                             pic={DataExtraction}
            />
            <KeyFeaturesCard heading="Automated Summaries"
                             para="Instantly generate concise summaries of the meeting content, allowing users to grasp the key takeaways with ease and efficiency."
                             pic={Summary}
            />
            <KeyFeaturesCard heading="Interactive Question & Answer"
                             para="Enables users to ask questions related to the meeting content based on the summary, fostering engagement and facilitating deeper understanding."
                             pic={QA}
            />
            <KeyFeaturesCard heading="User-Friendly Interface"
                             para="Offers an intuitive and easy-to-navigate interface, ensuring a seamless user experience for individuals of all tech proficiency levels."
                             pic={Interface}
            />
        </div>

    )
}